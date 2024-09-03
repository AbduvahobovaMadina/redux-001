import Products from "@/components/product/Products";
import { useFetch } from "../../hooks/useFetch";

import { Pagination } from "antd";
import React, { useState } from "react";
import Hero from "@/components/hero/Hero";

const Home = () => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, loading } = useFetch(
    "/products",
    {
      limit,
      skip: (skip - 1) * limit,
    },
    [skip, limit]
  );
  const handleChange = (current, pageSize) => {
    setLimit(pageSize);
    setSkip(current);
  };
  return (
    <div>
      <Hero />
      {<Products data={data?.products} loading={loading} />}
      <Pagination
        current={skip}
        onChange={handleChange}
        className="mt-5"
        align="center"
        defaultCurrent={1}
        defaultPageSize={limit}
        total={data?.total}
      />
    </div>
  );
};

export default Home;
