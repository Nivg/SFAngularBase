# SFAngularBase
Base project for Salesforce with Angular 1.x (with Angular 2 style).
This project is split between Local module (AngularBase) and Salesforce module (SFBase).

# Local Module
In the Local module, we implement the angular project side with mock responses from Salesforce.

# Salesforce Module
In the Salesforce module, we implement the services (using remote functions) and the templates (html files) for each Angular component using Visualforce component which identify by angular in the following way: 
```
<script type="text/ng-template" id="template_name.html">
  <c:myTemplateComponent/>
</script>
```
```
templateUrl: 'template_name.html'
```

# Getting Started
Install the Node Modules using npm, or download the files directly from the 'SFAngularBase/AngularBase/node_modules/' folder in the repo.
```
npm install
```

Run Webpack in order to bundle the files using the following command:
```
npm run watch
```

# TODO
> - Implement mock SF responses: Create another service for sf utils just comment the one you want to use, only the sfRemote function is what the developer sees
> - Use $q directly (we don't need anything else)
> - Create service with type script function for the template local vs server
> - Handle errors from server
