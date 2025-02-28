import { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/data")
      .then((response) => {
        setData(response.data); // JSON 데이터를 바로 사용 가능
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Spring Boot API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
