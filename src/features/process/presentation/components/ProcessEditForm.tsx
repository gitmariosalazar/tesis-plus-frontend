import React from 'react';
import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import './ProcessForm.css';
import { CustomButton } from '@/shared/components/button/Button';
import { MdClose, MdSave } from 'react-icons/md';
import CustomModal from '@/shared/components/modal/CustomModal';

interface ProcessFormProps {
  isOpen: boolean;
  onClose: () => void; // ✅ Nueva prop para cerrar modal desde el padre
}

const ProcessEditForm: React.FC<ProcessFormProps> = ({ isOpen, onClose }) => {
  const { Option } = Select;

  const handleCancel = () => {
    console.log('Cancel clicked');
    onClose(); // ✅ Llama a la función para cerrar modal
  };

  const handleSubmit = () => {
    console.log('Save clicked');
    // Aquí podrías validar o enviar datos, por ahora cerramos directamente:
    onClose(); // ✅ Cierra si todo fue exitoso
  };

  return (
    <CustomModal title="Edit Process" isOpen={isOpen}>
      <div className="invoice-form-container">
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  { required: true, message: 'Please choose the approver' },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: 'Please choose the dateTime' },
                ]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: 'please enter url description' },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <div className="form-actions">
          <div className="form-actions-buttons">
            <CustomButton
              title="Save"
              icon={MdSave}
              color="green"
              variant="filled"
              typeHtml="submit"
              onClick={handleSubmit}
            />
            <CustomButton
              title="Cancel"
              icon={MdClose}
              color="red"
              variant="filled"
              onClick={handleCancel}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ProcessEditForm;
