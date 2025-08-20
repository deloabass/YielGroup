import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import DocumentsManagementComponent from '../../components/admin/DocumentsManagement';

const DocumentsManagement = () => {
  return (
    <AdminLayout>
      <DocumentsManagementComponent />
    </AdminLayout>
  );
};

export default DocumentsManagement;