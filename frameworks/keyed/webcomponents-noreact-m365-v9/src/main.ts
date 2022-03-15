import { Benchmark } from "./benchmark";
import { benchmarkTemplate } from "./benchmark.template";
import { FluentButton, FluentLink } from "./fluent-wc-v9";

FluentButton;
FluentLink;

benchmarkTemplate.render(new Benchmark(), document.body);
