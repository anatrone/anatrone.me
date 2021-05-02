import Link from 'next/link'
import styled from "@emotion/styled";
// import ThemeToggle from "./ThemeToggle";
import dynamic from "next/dynamic";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
`;

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

export default function Nav({ page }) {
    return (
      <>
        <nav className="navbar justify-content-end fixed-top">
            <ThemeToggle />
        </nav>
      </>  
    )
}