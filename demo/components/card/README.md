## Usage

Cards are composed of different content blocks which are typically laid out in vertical succession.
The card package provides the building blocks for composing your card components.

| Component                 | Usage                                                                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mcw-card`                | Mandatory, for the card component                                                                                                                                                                                |
| `mcw-card-media`          | This component is a container for an image on the card                                                                                                                                                           |
| `mcw-card-primary-action` | This component is used as the container for primary tappable content                                                                                                                                             |
| `mcw-card-actions`        | Acts as a container for `mcw-card-action-buttons` and/or `mcw-card-action-icons`. It should be used as the last child of the `mcw-card` component.                                                               |
| `mcw-card-action-buttons` | It acts as a container for buttons of the card. This component is a child of a `mcw-card-actions` component.                                                                                                     |
| `mcw-card-action-icons`   | It acts as a container for icons of the card. This component is a child of a `mcw-card-actions` component. It can be used by itself or used as a sibling directly after the `mcw-card-action-buttons` component. |

### Card

```html
<mcw-card>
  <mcw-card-primary-action>
    <mcw-card-media :src="card" wide>Media</mcw-card-media>
  </mcw-card-primary-action>
  <section>
    <h2>Title goes here</h2>
    <h4>subtitle here</h4>
  </section>
  <mcw-card-actions>
    <mcw-card-action-buttons>
      <mcw-button outlined>ACTION</mcw-button>
    </mcw-card-action-buttons>
    <mcw-card-action-icons>
      <mcw-material-icon icon="star"></mcw-material-icon>
    </mcw-card-action-icons>
  </mcw-card-actions>
</mcw-card>
```

| props      | Type    | Default | Description                                               |
| ---------- | ------- | ------- | --------------------------------------------------------- |
| `outlined` | Boolean |         | Removes the shadow and displays a hairline stroke instead |

| event    | Description                 |
| -------- | --------------------------- |
| `@click` | emited on action area click |

| prop           | Type           | Default   | Description                                 |
| -------------- | -------------- | --------- | ------------------------------------------- |
| `event`        | String         | undefined | optional event to emit on click             |
| `event-target` | Object         | vm.\$root | optional event target, defaults to root bus |
| `event-args`   | Array          | []        | optional event args                         |
| `href`         | String         | undefined | link's href                                 |
| `to`           | String, Object | undefined | router-link property _(\*)_                 |
| `replace`      | Boolean        | false     | router-link property _(\*)_                 |
| `append`       | Boolean        | false     | router-link property _(\*)_                 |

> _(\*)_ Requires [vue-router](https://router.vuejs.org).
> If the `to` property is defined, the item behaves as a
> [router-link](https://router.vuejs.org/en/api/router-link.html).

### PrimaryAction

This component is used as the container for primary tappable content.

```html
<mcw-card>
  <mcw-card-primary-action>
    <p>Content</p>
  </mcw-card-primary-action>
</mcw-card>
```

### Media

This component is a container for an image on the card. Optionally, any children of the `<mcw-media>` component is wrapped with an element with the className `.mcw-card__media-content`. In order for your image to display, `mcw-media` requires that you have an aspect ratio of either `square` or `wide`.

```html
<mcw-card>
  <mcw-card-media :src="media.jpg" wide />
</mcw-card>
```

| props    | Type    | Default  | Description                                                                                           |
| -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `src`    | String  | required | the backgound image source                                                                            |
| `square` | Boolean |          | Automatically scales the media area’s height to equal its width                                       |
| `wide`   | Boolean |          | Automatically scales the media area's height according to its width, maintaining a 16:9 aspect ratio. |

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

| props        | Type    | Default | Description                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------ |
| `full-bleed` | Boolean |         | Enables full bleed card actions row by removing all padding. |

### Action Buttons

It acts as a container for buttons of the card. This component is a child of a `<mcw-card-actions>` component.

```html
<mcw-card-actions>
  <mcw-card-action-buttons>
    <mcw-button outlined>ACTION</mcw-button>
  </mcw-card-action-buttons>
</mcw-card-actions>
```

### Action Icons

It acts as a container for icons of the card. This component is a child of a `<mcw-card-actions>` component. It can be used by itself or used as a sibling directly after the `<mcw-card-action-buttons>` component.

```html
<mcw-card-actions>
  <mcw-card-action-icons>
    <mcw-material-icon icon="star"></mcw-material-icon>
  </mcw-card-action-icons>
</mcw-card-actions>
```

### Reference

- <https://material.io/components/web/catalog/cards>
