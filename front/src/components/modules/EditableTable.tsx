import React, {useState} from 'react'
import {Button, Form, Input, InputNumber, Popconfirm, Space, Table} from 'antd'
import {User} from '../../types/user'
import {Ticket} from '../../types/ticket'
import {Offer} from '../../types/offer'

type Item = Offer | Ticket | User

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
  record,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ?
    <InputNumber defaultValue={dataIndex && record[dataIndex as keyof Item]}/> :
    <Input defaultValue={dataIndex && record[dataIndex as keyof Item]}/>
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{margin: 0}}
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

type EditableTableProps = {
  dataSource: Item[]
}

export const EditableTable: React.FC<EditableTableProps> = ({dataSource}) => {
  const [form] = Form.useForm()
  const [data, setData] = useState<Item[]>(dataSource)
  const [editingKey, setEditingKey] = useState<number | undefined>(undefined)
  const isEditing = (record: Item) => record.id === editingKey


  const edit = (record: Item) => {
    form.setFieldsValue(record)
    setEditingKey(record.id)
  }

  const save = async (key?: number) => {
    try {
      const row = (await form.validateFields()) as Item
      const newData = [...data]
      const index = newData.findIndex(item => key === item.id)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        setData(newData)
        setEditingKey(undefined)
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey(undefined)
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  const cancel = () => {
    setEditingKey(undefined)
  }

  const handleDelete = (key?: number) => {
    setData(data.filter(item => item.id !== key))
  }

  const createColumns = (sampleData: Item, columnWith?: string[]) => {
    const keys = Object.keys(sampleData)
    const dataKeys = [
      keys.find(item => item === 'id'),
      ...keys.filter(item => item !== 'id'),
    ]

    const outputColumns = dataKeys.map((key, index) => (
      {
        title: key?.toUpperCase(),
        dataIndex: key,
        key: key,
        width: columnWith && columnWith[index],
        editable: true
      }
    ))
    const actionColumn = {
      title: 'ACTIONS',
      dataIndex: 'actions',
      key: 'action',
      editable: false,
      render: (text: string, record: Item) => {
        const editable = isEditing(record)
        return (
          <Space>
            {editable ? (
              <span>
                <Button onClick={() => save(record.id)} style={{marginRight: 8}}>Save</Button>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <>
                <Button disabled={editingKey !== undefined} onClick={() => edit(record)}>Edit</Button>
                <Popconfirm title={'Are you sure want to delete this item?'} okText={'Yes'} cancelText={'No'}
                  onConfirm={() => handleDelete(record.id)}>
                  <Button>Delete</Button>
                </Popconfirm>
              </>
            )}
          </Space>
        )
      }
    }
    return [...outputColumns, actionColumn]
  }

  const mergedColumns = createColumns(dataSource[0]).map(col => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })

  return <Table
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
}