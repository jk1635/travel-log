import { useEffect, useRef } from "react";

const useFadeIn = (delay, duration, position) => {
  const element = useRef(null);

  const handleDelay = name => {
    switch (name) {
      case "first":
        return "0.1s";
      case "second":
        return "0.3s";
      case "third":
        return "0.5s";
      default:
    }
  };

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transitionProperty = "all";
      current.style.transitionDuration = `${duration}s`;
      current.style.transformDelay = handleDelay(delay);
      current.style.transform = `translateY(0)`;
      current.style.opacity = 1;
    }
  }, [delay, duration, position]);

  return {
    ref: element,
    style: {
      transitionDelay: handleDelay(delay),
      transform: `translateY(${position}px)`,
      opacity: 0,
    },
  };
};

export default useFadeIn;
