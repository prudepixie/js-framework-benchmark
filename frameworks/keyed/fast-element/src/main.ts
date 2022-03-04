import { Benchmark } from "./benchmark";
import { benchmarkTemplate } from "./benchmark.template";

benchmarkTemplate.render(new Benchmark(), document.body);