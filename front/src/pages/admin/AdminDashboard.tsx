import React, {useState} from 'react'
import {Button, Form, Input, InputNumber, Popconfirm, Space, Table, Typography} from 'antd'
import styled from 'styled-components'
import {CommonLayout} from '../../components/modules/ComonLayout'

interface Item {
    key: string;
    name: string;
    age: number;
    address: string;
}

type EditableCellProps = {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

const {Title} = Typography

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const AdminDashboard: React.FC = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState<Item[]>(dataSource)
  const [editingKey, setEditingKey] = useState('')

  const isEditing = (record: Item) => record.key === editingKey

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record })
    setEditingKey(record.key)
  }

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item
  
      const newData = [...data]
      const index = newData.findIndex(item => key === item.key)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        setData(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  const cancel = () => {
    setEditingKey('')
  }

  const handleDelete =  (key: React.Key) => {
    setData(data.filter(item => item.key !== key))
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      editable: true
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '25%',
      editable: true
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '25%',
      editable: true
    },
    {
      title: 'Action',
      dataIndex: 'actions',
      key: 'action',
      render: (text: string, record: Item) => {
        const editable = isEditing(record)
        return (
          <Space>
            {editable ? (
              <span>
                <Button onClick={()=> save(record.key)} style={{marginRight: 8}}>Save</Button>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <>
                <Button disabled={editingKey !== ''} onClick={() => edit(record)}>Edit</Button>
                <Popconfirm title={'Are you sure want to delete this item?'} okText={'Yes'} cancelText={'No'} onConfirm={() => handleDelete(record.key)}>
                  <Button>Delete</Button>
                </Popconfirm>
              </>
            )}
          </Space>
        )
      }
    },
  ]

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })

  return <CommonLayout isAdmin>
    <Spacing>
      <Title level={3}>Users Management</Title>
      <Form form={form}>
        <Table 
          dataSource={data} 
          columns={mergedColumns} 
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}/>
      </Form>
    </Spacing>
  </CommonLayout>
}
export default AdminDashboard

const Spacing = styled.div`
  padding: 4rem 5%;
`