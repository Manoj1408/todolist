import React from "react";

const ToDo = ({toDo,markDone,setUpdateData,deleteTask }) => {
    return (
        <>
        {toDo &&
            toDo
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((task, index) => {
                return (
                  <React.Fragment key={task.id}>
                    <div className="taskBg">
                      <div className={task.status ? "done" : ""}>
                        <span className="teskNumber">{index + 1}</span>
                        <span className="teskText">{task.title}</span>
                      </div>
                      <div className="iconsWrap">
                        <span
                          className="Completed / Not Completed"
                          onClick={(e) => markDone(task.id)}
                        >
                          <i class="bx bx-check-circle"></i>
                        </span>
                        {task.status ? null : (
                          <span
                            className="Edit"
                            onClick={() =>
                              setUpdateData({
                                id: task.id,
                                title: task.title,
                                status: task.status ? true : false,
                              })
                            }
                          >
                            <i class="bx bxs-edit-alt"></i>
                          </span>
                        )}
                        <span
                          className="Delete"
                          onClick={() => deleteTask(task.id)}
                        >
                          <i class="bx bxs-trash"></i>
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
        </>
        
    )
}

export default ToDo;