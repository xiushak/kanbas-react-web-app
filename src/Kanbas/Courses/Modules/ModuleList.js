import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaRegCircleCheck, FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import db from "../../Database";
import ModuleItem from "./ModuleItem";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="px-2">
      <div className="text-end text-nowrap">
        <Button variant="secondary">Collapse All</Button>
        <Button variant="secondary">View Progress</Button>
        <Button variant="secondary">
          <FaRegCircleCheck className="mb-1" style={{ color: "green" }} />{" "}
          Publish All
        </Button>
        <Button variant="primary">
          <FaPlus className="mb-1" /> Module
        </Button>
        <Button variant="secondary">
          <FaEllipsisVertical className="mb-1" />
        </Button>
      </div>
      <hr />
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <ModuleItem key={index} module={module} />
        ))}
    </div>
  );
}
export default ModuleList;
