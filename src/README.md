# File Structure

For this React-Redux project, we are using the state-view file structure. This allows us to follow the separation of concerns design principle, by splitting up  Redux business logic from the container and presentational components.

Through extensive testing, we found that this file structure was the easiest to debug and limit merge conflicts.

Here is what the structure looks like:
```shell
state/
    example/
        action_types.js
        actions.js
        reducers.js
        thunks.js
    example2/
        action_types.js
        actions.js
        reducers.js
        thunks.js
    shared/
        store/
            store.js
    reducers.js
view/
    App/
        App.css
        App.js
    Example/
        ExampleContainer.jsx
        ExampleView.css
        ExampleView.jsx
    Example2/
        ExampleContainer2.jsx
        ExampleView.jsx
index.js
```

The naming conventions we are following are:
- PascalCase for container and presentational components
- snake_case for Redux actions, reducers, thunks
- The name of the states' directory that correspond with their views must match