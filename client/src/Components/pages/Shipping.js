import React from 'react'
import FormField from "../Forms/FormField";
import NavigationBar from "../Layout/NavigationBar";
import PageHeader from "../Layout/PageHeader"

export default function Shipping() {
    return (
      <div className="vh-100 bg-info">
        <NavigationBar link="dashboard" linkTitle="Dashboard" />
        <PageHeader title="Shipping Reporting" />
        <FormField />
      </div>
    );
}
