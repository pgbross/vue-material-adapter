## Usage

Cards are composed of different content blocks which are typically laid out in vertical succession.
The card package provides the building blocks for composing your card components.

| Component                 | Usage                                                     |
| ------------------------- | --------------------------------------------------------- |
| `mcw-card`                | Mandatory, for the card component                         |
| `mcw-card-media`          | Rich media container                                      |
| `mcw-card-primary-action` | Typically the majority of the card                        |
| `mcw-card-actions`        | Aarea is used to show different actions the user can take |
| `mcw-card-action-buttons` | Wraps buttons elements                                    |
| `mcw-card-action-icons`   | Wraps icons elements                                      |

### Card

```html
<mcw-card>
  <mcw-card-primary-action @click="onPrimaryAction">
    <mcw-card-media :src="card" wide>Media</mcw-card-media>
  </mcw-card-primary-action>
  <section>
    <h2>Title goes here</h2>
    <h4>subtitle here</h4>
  </section>
  <mcw-card-actions>
    <mcw-card-action-buttons>
      <mcw-button class="mdc-card__action mdc-card__action--button" outlined
        >ACTION</mcw-button
      >
    </mcw-card-action-buttons>
    <mcw-card-action-icons>
      <mcw-material-icon
        class="mdc-card__action mdc-card__action--icon"
        icon="star"
      ></mcw-material-icon>
    </mcw-card-action-icons>
  </mcw-card-actions>
</mcw-card>
```

| props      | Type    | Default | Description                                               |
| ---------- | ------- | ------- | --------------------------------------------------------- |
| `outlined` | Boolean |         | Removes the shadow and displays a hairline stroke instead |

### PrimaryAction

This component is used as the container for primary tappable content.

| prop      | Type           | Default   | Description          |
| --------- | -------------- | --------- | -------------------- |
| `href`    | String         | undefined | link's href          |
| `to`      | String, Object | undefined | router-link property |
| `replace` | Boolean        | false     | router-link property |
| `append`  | Boolean        | false     | router-link property |

```html
<mcw-card>
  <mcw-card-primary-action>
    <p>Content</p>
  </mcw-card-primary-action>
</mcw-card>
```

### Media

This area is used for showing rich media in cards.

```html
<mcw-card>
  <mcw-card-media :src="media.jpg" wide />
</mcw-card>
```

| props    | Type    | Default  | Description                                                                    |
| -------- | ------- | -------- | ------------------------------------------------------------------------------ |
| `src`    | String  | required | the backgound image source                                                     |
| `square` | Boolean |          | Automatically scales the media area’s height to equal its width                |
| `wide`   | Boolean |          | Automatically scales the media area's height, maintaining a 16:9 aspect ratio. |

> by default the media area size is wide (16x9)

### Actions

Acts as a container for `<mcw-card-action-buttons>` and/or `<mcw-card-action-icons>`. It should be used as the last child of the `<mcw-card>` component.

```html
<mcw-card-actions>
  <mcw-card-action-buttons>
    <mcw-button outlined>ACTION</mcw-button>
  </mcw-card-action-buttons>
  <mcw-card-action-icons>
    <mcw-material-icon icon="star"></mcw-material-icon>
  </mcw-card-action-icons>
</mcw-card-actions>
```

| props        | Type    | Default | Description                       |
| ------------ | ------- | ------- | --------------------------------- |
| `full-bleed` | Boolean |         | Removes the action area's padding |

### Action Buttons and Icons

To display buttons and icons in the same row, wrap them in `action-buttons` and `action-icons` elements:

```html
<mcw-card-actions>
  <mcw-card-action-buttons>
    <mcw-button outlined>ACTION</mcw-button>
  </mcw-card-action-buttons>
  <mcw-card-action-icons>
    <mcw-material-icon icon="star"></mcw-material-icon>
  </mcw-card-action-icons>
</mcw-card-actions>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-card>
