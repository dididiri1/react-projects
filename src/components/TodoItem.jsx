import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChageCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChageCheckBox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // T -> Props 바뀌지 않음 -> 리렌더링 X
  // F -> Props 바뀜 -> 리렌더링 O
  // onUpdate, onDelete만 뺴고 id, isDone, content, data 값만
  // 바뀌었을 떄만 리렌더링 시켜주면 되니깐 콜백 함수 안에 조건문 정의

  if (prevProps.id !== nextProps.id) {
    return false;
  }
  if (prevProps.isDone !== nextProps.isDone) {
    return false;
  }
  if (prevProps.content !== nextProps.content) {
    return false;
  }
  if (prevProps.date !== nextProps.date) {
    return false;
  }
});
