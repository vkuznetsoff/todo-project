import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootStateType } from "../../redux/rootReducer";
import { IProject } from "../../redux/stroreTypes";

// import { IInitialState } from "../../redux/todoReducer";
//import "./App.css";

const ProjectList: FC = () => {
  const dispatch = useDispatch();
  const state1 = useSelector((state: RootStateType) => state.todoReducer);
  console.log(state1);

  return (
    <div className="projectList">
      {(state1 as IProject[]).map((el) => (
        <div>
          <NavLink
            key={String(el.id)}
            to={`/projects/${el.id}`}
            className={"navitem"}
          >
            {el.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
