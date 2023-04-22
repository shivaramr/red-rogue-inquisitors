import React, { useEffect, useRef } from "react";
import CarouselHead from "./CarouselHead";
import { getPLStandings } from "../Action";

export default function HomeMain() {
  const triggerDidMount = useRef(false);

  useEffect(() => {
    if (!triggerDidMount.current) {
      getPLStandings();
      triggerDidMount.current = true;
    }
  }, []);

  return (
    <div>
      {/* <h1>HomeMain</h1> */}
      <CarouselHead style={{ height: "50vh" }} />
    </div>
  );
}
