The Bulma buttons have been extended inline with Curry's branding. All of the standard css classes such as is-small,
is-loading, etc. work as usual (see examples at the bottom).

Colors

```js padded 
<button className="button is-primary">Primary</button>
<button className="button is-secondary">Secondary</button>
```

Styles

Outlined

```js padded 
<button className="button is-primary is-outlined">Primary</button>
<button className="button is-secondary is-outlined">Secondary</button> 
```

Is outlined alternative:

```js padded 
<button className="button is-primary is-outlined-alt">Primary</button>
<button className="button is-secondary is-outlined-alt">Secondary</button>
```

Icons
[React Icons](https://react-icons.github.io/react-icons) have been installed. Additionally, we have a Curry's branded
font that can be used:

With Curry's branding

```js padded
import "./demo.scss";

<div className="padded">
    <button className="button is-primary">
        <span className="icon">
            <i className="glyph basket-icon"></i>
        </span>
        <span>Primary</span>
    </button>

    <button className="button is-secondary is-outlined">
        <span className="icon">
            <i className="glyph basket-icon"></i>
        </span>
        <span>Secondary</span>
    </button>
</div>
```

With React Icons

```js padded
import {FaShoppingBasket} from "react-icons/fa";

<div className="padded">
    <button className="button is-primary">
        <span className="icon">
            <FaShoppingBasket/>
        </span>
        <span>Primary</span>
    </button>

    <button className="button is-secondary is-outlined">
        <span className="icon">
            <FaShoppingBasket/>
        </span>
        <span>Secondary</span>
    </button>
</div>
```

Examples

```js padded 

<button className="button is-small">Small</button>
<button className="button ">Default</button>
<button className="button is-medium">Medium</button>
<button className="button is-large">Large</button>
<br/>
<br/>
<button className="button is-fullwidth">Default</button>
<br/>
<button className="button is-primary is-loading">Primary</button>
<button className="button is-secondary is-loading">Secondary</button>

```


