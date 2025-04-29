"use client";

import { Card } from "@/app/components/Cards";
import React from "react";
import { FaExclamationCircle, FaCheckCircle, FaTruck } from "react-icons/fa";

export default function Page() {
  return (
    <div className="">
      <Card title="Entregas Pendentes" value={0} icon={FaExclamationCircle} />
      <Card title="Entregas Efetuadas" value={0} icon={FaCheckCircle} />
      <Card title="Para entregar" value={0} icon={FaTruck} />
    </div>
  );
}
