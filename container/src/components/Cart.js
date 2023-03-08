import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { mount } from "product/productIndex";

export default forwardRef((props, ref) => {
  const containerRef = useRef();
  const handlers = useRef();

  useEffect(() => {
    const { addHandler } = mount(containerRef.current, {
      onItemDeleted: console.log,
    });
    handlers.current = { addHandler };
  }, []);
  useImperativeHandle(ref, () => {
    return handlers.current;
  });
  return <div ref={containerRef}>Yes</div>;
});
