# State Directory

Excluding the Redux store, each subdirectory of the state directory will contain the following files:
- `action_types.js` - exports the action type constants to be used in action creators and reducers
- `actions.js` - exports action creators to be used in thunks and reducers
- `reducers.js` - exports a reducer function to handle the app state in response to actions sent to the Redux store
- `thunks.js` - if any, export thunk creators to be used for sending and receiving requests and data

There is also a barrel file for exporting all reducers to be combined in the store.