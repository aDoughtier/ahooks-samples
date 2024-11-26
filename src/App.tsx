import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Switch,
  Upload,
} from 'antd';

const { TextArea } = Input;

const FormDisabledDemo = () => {
  const [fileLoading, setFileLoading] = useState<boolean>(false);
  const [form] = Form.useForm<any>();

  const onChangeBusinessLicenseUrl = () => {
    form.setFieldValue('file', undefined)
  }

  const handleClick = () => {
    form.validateFields().then((values) => {
      console.log('Success:', values);
    }).catch((info) => {
      console.log('Validate Failed:', info);
    });
  }

  const handleUpload = (options: any) => {
    const formData = new FormData();
    formData.append('file', options.file);
    setFileLoading(true)
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          fileUrl: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
        })
      }, 1000)
    }).then((res: any) => {
      if (res.fileUrl) {
        const fileData: any = {
          uid: '1',
          name: options.file.name,
          status: 'done',
          url: res.fileUrl
        };
        // form.setFieldValue('file', [fileData])
        // 调用Upload的onSuccess回调
        options.onSuccess(fileData);
      }
      setFileLoading(false)
    })
      .catch(err => {
        options.onError();
        setFileLoading(false)
      });
  };

  const handleRemove = () => {
    onChangeBusinessLicenseUrl?.();
    return true;
  }

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  useEffect(() => {
    form.setFieldsValue({
      file: [
        
      ],
      text:'hddhdhdhhddjkkksslk'
    })
  }, [])
  

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
      >
        <Form.Item label="TextArea" name='text'>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="file" label="Upload" valuePropName="fileList" rules={[{ required: true, message: '请上传文件' }]} getValueFromEvent={normFile}>
          <Upload
            disabled={false}
            multiple={false}
            customRequest={handleUpload}
            maxCount={1}
            onRemove={handleRemove}
          >
            <Button disabled={false} className='flex items-center natural-person-add-benifit' loading={fileLoading}>
              <span style={{ marginLeft: 4 }}>上传图片</span>
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button onClick={() => { handleClick() }}>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;