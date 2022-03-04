import { html, repeat } from "@microsoft/fast-element";
import { Benchmark, RandomItem } from "./benchmark";
import { oneTime } from "./one-time";

export const benchmarkTemplate = html<Benchmark>`
  <div class="container">
    <div class="jumbotron">
        <div class="row">
            <div class="col-md-6">
                <h1>Web Components- No React - M365 V9</h1>
            </div>
            <div class="col-md-6">
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="run" @click="${x => x.run()}">Create 1,000 rows</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="runlots" @click="${x => x.runLots()}">Create 10,000 rows</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="add" @click="${x => x.add()}">Append 1,000 rows</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="update" @click="${x => x.update()}">Update every 10th row</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="clear" @click="${x => x.clear()}">Clear</button>
                </div>
                <div class="col-sm-6 smallpad">
                    <button type="button" class="btn btn-primary btn-block" id="swaprows" @click="${x => x.swapRows()}">Swap Rows</button>
                </div>
            </div>
        </div>
    </div>
    <table class="table table-hover table-striped test-data">
        <tbody>
          ${repeat(x => x.data, html<RandomItem, Benchmark>`
            <tr class="${(x, c) => x === c.parent.selected ? 'danger' : ''}">
                <td class="col-md-1">${oneTime(x => x.id)}</td>
                <td class="col-md-4">
                    <a @click="${(x, c) => c.parent.select(x)}">${x => x.label}</a>
                    <fluent-button>
                        <fluent-link href="#">${x => x.label}</fluent-link>
                    </fluent-button>
                </td>
                <td class="col-md-1">
                  <a @click="${(x, c) => c.parent.remove(x)}">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </a>
                </td>
                <td class="col-md-6"></td>
            </tr>
          `)}
            
        </tbody>
    </table>
    <span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>
  </div>
`;