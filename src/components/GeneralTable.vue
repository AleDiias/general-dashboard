<template>
  <div class="compact" ref="table"></div>
</template>

<script>
import { TabulatorFull as Tabulator } from "tabulator-tables"; //import Tabulator library
// import TesteComponent from "./TesteComponent.vue";
// import { createApp, h } from "vue";

export default {
  props: {
    tableData: {
      type: Array,
    },
    maxValue: {},
  },

  data() {
    return {
      viewByAgent: true,
      tabulator: null, //variable to hold your table
      reactiveData: true,
    };
  },
  mounted() {
    //instantiate Tabulator when element is mounted
    const vm = this;

    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      maxHeight: "100%",
      // reactiveData: true,
      layout: "fitColumns",
      layoutColumnsOnNewData: true,
      rowFormatter: function (row) {
        console.log(row.getData());
        row.getCell("status").getElement().classList.add("status-cell");
        if (row.getData().status === "Disponível") {
          row.getCell("status").getElement().style.backgroundColor = "#12b361";
        }
        if (row.getData().status === "Pausado") {
          row.getCell("status").getElement().style.backgroundColor = "#E8440C";
        }
        if (row.getData().status === "Tocando") {
          row.getCell("status").getElement().style.backgroundColor = "#E8900C";
        }
        if (row.getData().status === "Em Discagem") {
          row.getCell("status").getElement().style.backgroundColor = "#E8900C";
        }
        if (row.getData().status === "Em atendimento") {
          row.getCell("status").getElement().style.backgroundColor = "#5DA8F3";
        }
        if (row.getData().status === "Indisponivel") {
          row.getCell("status").getElement().style.backgroundColor = "#535353";
        }
        if (row.getData().status === "Em espera") {
          row.getCell("status").getElement().style.backgroundColor = "#E8440C";
        }
      },
      columns: [
        {
          width: 40,
          formatter: "rowSelection",
          /*titleFormatter: "rowSelection",*/
          hozAlign: "center",
          headerSort: false,
          rowRange: "active",
          cellClick: function (e, cell) {
            cell.getRow().toggleSelect();
          },
          resizable: false,
        },
        {
          formatter: function (cell) {
            if (cell.getRow().getData().doNotDisturb)
              return `
                ${cell.getRow().getData().agents}
                  <span class="do-not-disturb"> 
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.09375 0.5C2.78175 0.5 0.09375 3.188 0.09375 6.5C0.09375 9.812 2.78175 12.5 6.09375 12.5C9.40575 12.5 12.0938 9.812 12.0938 6.5C12.0938 3.188 9.40575 0.5 6.09375 0.5ZM9.09375 7.1H3.09375V5.9H9.09375V7.1Z" fill="white"/>
</svg>
Não perturbe</span>
                `;
            return cell.getRow().getData().agents;
          },
          title: "Agentes",
          field: "agents",
          hozAlign: "left",
          widthGrow: 2,
          headerSort: false,
          resizable: false,
        },
        {
          formatter: function (cell) {
            const value = cell.getValue();
            console.log({ value });

            return `
            <div class="attendances">
              <div class="${value.calls > 0 ? "" : "disable"}">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.89612 4.82766C3.69612 6.39988 4.98501 7.68877 6.55723 8.48877L7.77945 7.26655C7.93501 7.11099 8.15168 7.06655 8.34612 7.12766C8.96834 7.33321 9.63501 7.44432 10.3295 7.44432C10.635 7.44432 10.885 7.69432 10.885 7.99988V9.94432C10.885 10.2499 10.635 10.4999 10.3295 10.4999C5.11279 10.4999 0.88501 6.2721 0.88501 1.05543C0.88501 0.749878 1.13501 0.499878 1.44057 0.499878H3.38501C3.69057 0.499878 3.94057 0.749878 3.94057 1.05543C3.94057 1.74988 4.05168 2.41654 4.25723 3.03877C4.31834 3.23321 4.2739 3.44988 4.11834 3.60543L2.89612 4.82766Z"
                    fill="#165A9F"
                  />
                </svg>

                <span class="finish2">${value.calls}</span>
              </div>

              <div class="divisor"></div>

                <div class="${value.chats > 0 ? "" : "disable"}">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.85098 0.656616C3.07042 0.656616 0.88501 2.6862 0.88501 5.18719C0.88501 6.43656 1.67986 7.68592 2.54108 8.54546C2.4747 9.405 1.34853 9.79764 0.88501 10.3433C1.87787 10.3433 3.07042 9.95346 3.73307 9.32737C4.26297 9.48431 5.32164 9.71776 5.91848 9.71776C8.6996 9.71776 10.885 7.68592 10.885 5.18719C10.885 2.6862 8.63379 0.656616 5.85098 0.656616Z"
                      fill="#E8900C"
                    />
                  </svg>

                <span class="finish2">${value.chats}</span>
              </div>
            </div>
            `;
          },
          title: "Atendimentos",
          field: "attendances",
          hozAlign: "right",
          headerHozAlign: "center",
          headerSort: false,
          width: 145,
          resizable: false,
        },
        {
          title: "Finalizados",
          field: "finish",
          headerHozAlign: "center",
          headerSort: false,
          resizable: false,

          formatter: function (cell) {
            const finished = cell.getValue();
            if (!finished || !vm.maxValue) return "";

            const perc = (Number(finished) * 100) / vm.maxValue;
            const maxPerc = perc > 100 ? 100 : perc.toFixed(2);

            return `
            <div class="progress">
              <div class="info">
               <span class="finish"> ${finished} </span>  / ${maxPerc}%
              </div>
              <div class="progress-bar2">
                <div class="progress-bar" style="width: ${maxPerc}%"></div>
              </div>
            </div>
            `;
          },
        },
        {
          title: "Ramal",
          field: "exten",
          headerSort: false,
          resizable: false,
        },
        {
          // formatter: function (cell, formatterParams, onRendered) {
          //   //plain text value
          //   return `
          //   <a class="waves-effect waves-light btn">button</a>
          //   `;
          // },
          title: "Rejeiçoes",
          field: "rejections",
          headerSort: false,
          resizable: false,

          // formatter: function (cell, formatterParams, onRendered) {
          //   var holderEl = document.createElement("div");
          //   holderEl.id = "test";

          //   onRendered(function () {
          //     const app = createApp(TesteComponent, { value: cell.getValue() });
          //     app.mount("#test");
          //   });
          //   return holderEl;
          // },
        },
        {
          title: "Número",
          field: "callerNumber",
          // hozAlign: "center",
          headerSort: false,
          resizable: false,
        },
        {
          title: "Ociosidade",
          field: "idle",
          // hozAlign: "center",
          headerSort: false,
          resizable: false,
        },
        {
          title: "Duração",
          field: "duration",
          // hozAlign: "center",
          headerSort: false,
          resizable: false,
        },
        {
          title: "Status",
          field: "status",
          // hozAlign: "center",
          headerSort: false,
          resizable: false,
        },
      ],
    });
  },

  methods: {
    onViewByAgent(args) {
      this.viewByAgent = args;
    },

    watch: {
      maxValue(maxValue) {
        console.log({ maxValueNew: maxValue });
      },
    },
  },
};
</script>

<!-- <style>
.tabulator {
  font-family: "Open Sans";
  font-size: 12px !important;
}

.tabulator .tabulator-headers {
  color: #2e2e2e;
}

.tabulator-row {
  height: 34px !important;
  min-height: 34px !important;
  display: flex;
  text-align: center;
}

.tabulator-row .tabulator-cell {
  display: flex !important;
  align-items: center;
}

.tabulator .tabulator-tableholder .tabulator-table {
  color: #2e2e2e !important;
  width: 100%;
}

.tabulator-row.tabulator-row-even {
  background-color: #ebebeb !important;
}

.status-cell {
  height: 23px !important;
  width: 150px !important;
  position: absolute;
  border-radius: 6px;
  margin-left: 0px;
  font-weight: 700;
  color: white;
  line-height: 12px;
  display: flex !important;
  align-items: center !important;
  justify-content: center;
  align-self: center;
}

.do-not-disturb {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px;
  gap: 3px;
  margin-left: 10px;

  /* position: absolute; */
  width: 96px;
  height: 21px;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  color: white;

  background: #535353;
  border-radius: 5px;
}

.finish2 {
  position: relative;
  font-size: 14px;
  font-weight: 700;
  margin-left: 11px;
  padding: 3px;
}

.attendances {
  display: flex;
  flex-direction: row;
  padding: 7px;
  gap: 13px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.attendances .disable {
  color: #767676;
}

.attendances .disable svg path {
  fill: #ababab;
}

.divisor {
  width: 1px;
  min-width: 1px;
  height: 33px;
  position: absolute;

  background: #c5c5c5;
}
</style> -->
