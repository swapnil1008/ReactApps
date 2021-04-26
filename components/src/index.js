import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Warning! Are you sure want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          fakerImage={faker.image.image()}
          author="Swapnil"
          timeAgo="Yesterday At 4:00PM"
          comment="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          fakerImage={faker.image.image()}
          author="Srijan"
          timeAgo="Today At 11:00AM"
          comment="Very Beautiful!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          fakerImage={faker.image.image()}
          author="Shashi"
          timeAgo="Today At 10:00AM"
          comment="Great!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          fakerImage={faker.image.image()}
          author="Vivek"
          timeAgo="Yesterday At 6:00PM"
          comment="Awesome!"
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

