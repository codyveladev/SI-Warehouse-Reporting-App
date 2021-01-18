import React from "react";
import FormField from "../Forms/FormField";
import NavigationBar from "../Layout/NavigationBar";
import PageHeader from "../Layout/PageHeader";

export default function Receiving() {
  return (
    <div className="min-vh-100 h-100 bg-info">
      <NavigationBar link="dashboard" linkTitle="Dashboard" />
      <PageHeader title="Receiving Reporting" />
      <FormField />
    </div>
  );
}
