import React from "react";
import { Card, Skeleton } from "antd";
const Sceleton = ({ limit = 8 }) => {
  return (
    <div className="container">
      <div className="flex border  gap-4  flex-wrap rounded-lg   justify-between p-3 mb-7">
        {new Array(limit).fill().map((_, inx) => (
          <Card className="w-96 h-[300px]" key={inx}>
            <Skeleton active />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sceleton;
