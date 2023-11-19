import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCircleCheck, FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import ModuleItem from "./ModuleItem";
import {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId, dispatch]);

  return (
    <div className="px-2">
      <div className="text-end text-nowrap">
        <Button variant="secondary">Collapse All</Button>
        <Button variant="secondary">View Progress</Button>
        <Button variant="secondary">
          <FaRegCircleCheck className="mb-1" style={{ color: "green" }} />{" "}
          Publish All
        </Button>
        <input
          className="form-control my-2"
          value={module.name}
          placeholder="Module Name"
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control my-1"
          placeholder="Module Description"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <Button variant="primary" onClick={handleAddModule}>
          <FaPlus className="mb-1" /> Module
        </Button>
        <Button variant="secondary" onClick={handleUpdateModule}>
          Update
        </Button>
        <Button variant="secondary">
          <FaEllipsisVertical className="mb-1" />
        </Button>
      </div>
      <hr />
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <>
            <ModuleItem
              key={index}
              module={module}
              setModule={(module) => dispatch(setModule(module))}
              deleteModule={handleDeleteModule}
            />
          </>
        ))}
    </div>
  );
}
export default ModuleList;
