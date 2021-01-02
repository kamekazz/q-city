/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { Redirect } from "react-router-dom";
import onlyGuest from "components/hoc/onlyGuest";

const CreateIssuePages = () => {
  return <h1>kendra</h1>;
};

export default onlyGuest(CreateIssuePages);
