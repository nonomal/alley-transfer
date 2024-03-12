/* @refresh reload */
import { render } from "solid-js/web";
import "./index.scss";
import "alley-components/lib/index.css";
import App from "./App";

const root = document.getElementById("root");

render(() => <App />, root!);
