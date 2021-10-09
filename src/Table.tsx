import React, { FunctionComponent, useEffect, useState } from "react";
import editIcon from "./assets/edit.png";
import { fetchClientList } from "./service";
import "./Table.css";

const Table: FunctionComponent = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [curPage, setcurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");

  const updateStatus = (id: string, status: string) => {
    let newTableContent = tableData.map((elem, index) => {
      if (id === elem.clientId) {
        elem.status = status;
      }
      return elem;
    });
    setTableData([...newTableContent]);
  };

  useEffect(() => {
    const init = async () => {
      let clients = await fetchClientList({
        data: {
          page: curPage,
          searchKey: search,
        },
      });
      setTableData(clients.list);
      setTotalPage(clients.page);
    };

    init();
  }, [curPage, search]);

  const updateSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target?.value);
    setcurPage(1);
  };

  const debounce = (
    n: number,
    fn: (...params: any[]) => any,
    immed: boolean = false
  ) => {
    let timer: number | undefined | any = undefined;
    return function (this: any, ...args: any[]) {
      if (timer === undefined && immed) {
        fn.apply(this, args);
      }
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), n);
      return timer;
    };
  };

  const betterFunction = debounce(1000, updateSearchKey);

  return (
    <div>
      <div className="searchItem">
        <div>Client Managemnet tool</div>
        <input
          className="search"
          placeholder="Search by client id"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // updateSearchKey(e);
            betterFunction(e);
          }}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <td colSpan={1}>Selecet All</td>
            <td colSpan={7}>Client details</td>
            <td colSpan={2}>Action</td>
          </tr>
          <tr>
            <td>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </td>
            <td>S.No</td>
            <td>Client Id</td>
            <td>Name</td>
            <td>Email Id</td>
            <td>Phone number</td>
            <td>Brand Name</td>
            <td>Status</td>
            <td>Validate/Decline</td>
            <td>Store info</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((elem, index) => {
            return (
              <tr key={`${elem.clientId}${index}`}>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td>{elem.sno}</td>
                <td>{elem.clientId}</td>
                <td>{elem.name}</td>
                <td>{elem.emailid}</td>
                <td>{elem.phone}</td>
                <td>{elem.brand}</td>
                <td>{elem.status}</td>
                <td>
                  <button
                    className={"validateBtn"}
                    onClick={() => {
                      updateStatus(elem.clientId, "Confirmed");
                    }}
                  >
                    Validate
                  </button>
                  <button
                    className={"declineBtn"}
                    onClick={() => {
                      updateStatus(elem.clientId, "Declined");
                    }}
                  >
                    Decline
                  </button>
                </td>
                <td>
                  <img alt={""} src={editIcon} className="editImg" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${curPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              onClick={() => {
                setcurPage(curPage - 1);
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from(new Array(totalPage)).map((elem, index) => {
            return (
              <li
                className={`page-item ${index + 1 === curPage ? "active" : ""}`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => {
                    setcurPage(index + 1);
                  }}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}
          <li
            className={`page-item ${curPage === totalPage ? "disabled" : ""}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => {
                setcurPage(curPage + 1);
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
