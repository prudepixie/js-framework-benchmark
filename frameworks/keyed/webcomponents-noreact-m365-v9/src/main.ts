import { Benchmark } from "./benchmark";
import { benchmarkTemplate } from "./benchmark.template";
import {
    fluentButton,
    fluentLink,
    provideFluentDesignSystem,
} from "fluent-wc-v9";

provideFluentDesignSystem()
    .register(
        fluentButton(),
        fluentLink()
    );

benchmarkTemplate.render(new Benchmark(), document.body);