<template>
  <div class="mcw-demo mcw-demo--container data-table-demo">
    <div class>
      <div class="mdc-typography--headline6">Standard</div>
      <mcw-data-table>
        <table class="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th
                class="mdc-data-table__header-cell"
                role="columnheader"
                scope="col"
              >
                Dessert
              </th>
              <th
                class="
                  mdc-data-table__header-cell
                  mdc-data-table__header-cell--numeric
                "
                role="columnheader"
                scope="col"
              >
                Carbs (g)
              </th>
              <th
                class="
                  mdc-data-table__header-cell
                  mdc-data-table__header-cell--numeric
                "
                role="columnheader"
                scope="col"
              >
                Protein (g)
              </th>
              <th
                class="mdc-data-table__header-cell"
                role="columnheader"
                scope="col"
              >
                Comments
              </th>
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell">Frozen yogurt</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                24
              </td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                4.0
              </td>
              <td class="mdc-data-table__cell">Super tasty</td>
            </tr>
            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell">Ice cream sandwich</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                37
              </td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                4.3
              </td>
              <td class="mdc-data-table__cell">I like ice cream more</td>
            </tr>
            <tr class="mdc-data-table__row">
              <td class="mdc-data-table__cell">Eclair</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                24
              </td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                6.0
              </td>
              <td class="mdc-data-table__cell">New filing flavor</td>
            </tr>
          </tbody>
        </table>
      </mcw-data-table>
    </div>
    <p></p>
    <div class>
      <div class="mdc-typography--headline6">Row Selection</div>
      <mcw-data-table
        @mdcdatatable:rowselectionchanged="onRowSelection"
        @mdcdatatable:selectedall="onSelectAll"
        @mdcdatatable:unselectedall="onUnselectAll"
      >
        <table class="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th
                class="
                  mdc-data-table__header-cell
                  mdc-data-table__header-cell--checkbox
                "
                role="columnheader"
                scope="col"
              >
                <mcw-checkbox
                  ref="rowCheckbox"
                  class="mdc-data-table__header-row-checkbox"
                ></mcw-checkbox>
              </th>
              <th
                class="mdc-data-table__header-cell"
                role="columnheader"
                scope="col"
              >
                Signal name
              </th>
              <th
                class="mdc-data-table__header-cell"
                role="columnheader"
                scope="col"
              >
                Status
              </th>
              <th
                class="mdc-data-table__header-cell"
                role="columnheader"
                scope="col"
              >
                Severity
              </th>
              <th
                class="mdc-data-table__header-cell"
                role="columnheader"
                scope="col"
              >
                Stage
              </th>
              <th
                class="
                  mdc-data-table__header-cell
                  mdc-data-table__header-cell--numeric
                "
                role="columnheader"
                scope="col"
              >
                Time
              </th>
              <th
                class="mdc-data-table__header-cell"
                role="columnheader"
                scope="col"
              >
                Roles
              </th>
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            <tr
              class="mdc-data-table__row mdc-data-table__row--selected"
              data-row-id="u0"
            >
              <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <mcw-checkbox
                  ref="rowCheckbox"
                  class="mdc-data-table__row-checkbox"
                  :checked="true"
                ></mcw-checkbox>
              </td>
              <th id="u0" class="mdc-data-table__cell" scope="row">
                Arcus watch slowdown
              </th>
              <td class="mdc-data-table__cell">Online</td>
              <td class="mdc-data-table__cell">Medium</td>
              <td class="mdc-data-table__cell">Triaged</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                0:33
              </td>
              <td class="mdc-data-table__cell">Allison Brie</td>
            </tr>
            <tr
              class="mdc-data-table__row"
              aria-selected="true"
              data-row-id="u1"
            >
              <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <mcw-checkbox
                  ref="rowCheckbox"
                  class="mdc-data-table__row-checkbox"
                ></mcw-checkbox>
              </td>
              <th id="u1" class="mdc-data-table__cell" scope="row">
                monarch: prod shared
              </th>
              <td class="mdc-data-table__cell">Offline</td>
              <td class="mdc-data-table__cell">Huge</td>
              <td class="mdc-data-table__cell">Triaged</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                0:33
              </td>
              <td class="mdc-data-table__cell">Brie Larson</td>
            </tr>
            <tr
              data-row-id="u2"
              class="mdc-data-table__row"
              aria-selected="true"
            >
              <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <mcw-checkbox
                  ref="rowCheckbox"
                  class="mdc-data-table__row-checkbox"
                ></mcw-checkbox>
              </td>
              <th id="u2" class="mdc-data-table__cell" scope="row">
                monarch: prod native
              </th>
              <td class="mdc-data-table__cell">Online</td>
              <td class="mdc-data-table__cell">Minor</td>
              <td class="mdc-data-table__cell">Not triaged</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                0:33
              </td>
              <td class="mdc-data-table__cell">Jeremy Lake</td>
            </tr>
            <tr data-row-id="u3" class="mdc-data-table__row">
              <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                <mcw-checkbox
                  ref="rowCheckbox"
                  class="mdc-data-table__row-checkbox"
                ></mcw-checkbox>
              </td>
              <th id="u3" class="mdc-data-table__cell" scope="row">
                Arcus watch slowdown
              </th>
              <td class="mdc-data-table__cell">Online</td>
              <td class="mdc-data-table__cell">Negligible</td>
              <td class="mdc-data-table__cell">Triaged</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                0:33
              </td>
              <td class="mdc-data-table__cell">Angelina Cheng</td>
            </tr>
          </tbody>
        </table>
      </mcw-data-table>
    </div>

    <p></p>
    <div class>
      <div class="mdc-typography--headline6">Sorting</div>
      <mcw-data-table @mdc-data-table:sorted="onSorted">
        <table class="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th
                class="
                  mdc-data-table__header-cell
                  mdc-data-table__header-cell--with-sort
                "
                role="columnheader"
                scope="col"
                aria-sort="none"
                data-column-id="dessert"
              >
                <div class="mdc-data-table__header-cell-wrapper">
                  <div class="mdc-data-table__header-cell-label">Dessert</div>
                  <button
                    class="
                      mdc-icon-button
                      material-icons
                      mdc-data-table__sort-icon-button
                    "
                    aria-label="Sort by dessert"
                    aria-describedby="dessert-status-label"
                  >
                    arrow_upward
                  </button>
                  <div
                    id="dessert-status-label"
                    class="mdc-data-table__sort-status-label"
                    aria-hidden="true"
                  ></div>
                </div>
              </th>
              <th
                class="
                  mdc-data-table__header-cell
                  mdc-data-table__header-cell--numeric
                  mdc-data-table__header-cell--with-sort
                "
                role="columnheader"
                scope="col"
                aria-sort="ascending"
                data-column-id="carbs"
              >
                <div class="mdc-data-table__header-cell-wrapper">
                  <button
                    class="
                      mdc-icon-button
                      material-icons
                      mdc-data-table__sort-icon-button
                    "
                    aria-label="Sort by carbs"
                    aria-describedby="carbs-status-label"
                  >
                    arrow_upward
                  </button>
                  <div class="mdc-data-table__header-cell-label">Carbs (g)</div>
                  <div
                    id="carbs-status-label"
                    class="mdc-data-table__sort-status-label"
                    aria-hidden="true"
                  ></div>
                </div>
              </th>
              <th
                class="
                  mdc-data-table__header-cell
                  mdc-data-table__header-cell--numeric
                  mdc-data-table__header-cell--with-sort
                "
                role="columnheader"
                scope="col"
                aria-sort="none"
                data-column-id="protein"
              >
                <div class="mdc-data-table__header-cell-wrapper">
                  <button
                    class="
                      mdc-icon-button
                      material-icons
                      mdc-data-table__sort-icon-button
                    "
                    aria-label="Sort by protein"
                    aria-describedby="protein-status-label"
                  >
                    arrow_upward
                  </button>
                  <div class="mdc-data-table__header-cell-label">
                    Protein (g)
                  </div>
                  <div
                    id="protein-status-label"
                    class="mdc-data-table__sort-status-label"
                    aria-hidden="true"
                  ></div>
                </div>
              </th>
              <th
                class="mdc-data-table__header-cell"
                role="columnheader"
                scope="col"
                data-column-id="comments"
              >
                Comments
              </th>
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            <tr
              v-for="item in filteredData"
              :key="item.dessert"
              class="mdc-data-table__row"
            >
              <td class="mdc-data-table__cell">{{ item.dessert }}</td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                {{ item.carbs }}
              </td>
              <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
                {{ item.protein }}
              </td>
              <td class="mdc-data-table__cell">{{ item.comments }}</td>
            </tr>
          </tbody>
        </table>
      </mcw-data-table>
    </div>
  </div>
</template>

<script src="./data-table.js"></script>

<style>
.data-table-demo {
  width: 75%;
  flex-direction: column;
}
</style>
