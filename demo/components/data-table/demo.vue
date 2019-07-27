<template>
  <div class="mcw-demo mcw-demo--container data-table-demo">
    <div class>
      <div class="mdc-typography--headline6">Standard</div>
      <mcw-data-table>
        <table class="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Carbs (g)</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Protein (g)</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell">Frozen yogurt</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
              <td class="mdc-data-table__cell">Super tasty</td>
            </tr>
            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell">Ice cream sandwich</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.3</td>
              <td class="mdc-data-table__cell">I like ice cream more</td>
            </tr>
            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell">Eclair</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
              <td class="mdc-data-table__cell">New filing flavor</td>
            </tr>
          </tbody>
        </table>
      </mcw-data-table>
    </div>

    <div class>
      <div class="mdc-typography--headline6">Row Selection</div>
      <mcw-data-table>
        <table class="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th
                class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                role="columnheader"
                scope="col"
              >
                <div
                  class="mdc-checkbox mdc-checkbox--selected mdc-data-table__header-row-checkbox"
                >
                  <input
                    type="checkbox"
                    class="mdc-checkbox__native-control"
                    aria-label="Toggle all rows"
                  />
                  <div class="mdc-checkbox__background">
                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path
                        class="mdc-checkbox__checkmark-path"
                        fill="none"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      />
                    </svg>
                    <div class="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
              </th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Carbs (g)</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Protein (g)</th>
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            <tr class="mdc-data-table__row" data-row-id="u0">
              <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <div class="mdc-checkbox mdc-data-table__row-checkbox">
                  <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="r0" />
                  <div class="mdc-checkbox__background">
                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path
                        class="mdc-checkbox__checkmark-path"
                        fill="none"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      />
                    </svg>
                    <div class="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
              </td>
              <td class="mdc-data-table__cell" id="r0">Frozen yogurt</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
            </tr>
            <tr
              class="mdc-data-table__row mdc-data-table__row--selected"
              aria-selected="true"
              data-row-id="u1"
            >
              <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <div class="mdc-checkbox mdc-checkbox--selected mdc-data-table__row-checkbox">
                  <input
                    type="checkbox"
                    class="mdc-checkbox__native-control"
                    checked
                    aria-labelledby="r1"
                  />
                  <div class="mdc-checkbox__background">
                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                      <path
                        class="mdc-checkbox__checkmark-path"
                        fill="none"
                        d="M1.73,12.91 8.1,19.28 22.79,4.59"
                      />
                    </svg>
                    <div class="mdc-checkbox__mixedmark"></div>
                  </div>
                </div>
              </td>
              <td class="mdc-data-table__cell" id="r1">Ice cream sandwich</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.3</td>
            </tr>
          </tbody>
        </table>
      </mcw-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.data-table-demo {
  width: 75%;
  flex-direction: column;
}
</style>
