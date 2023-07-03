# ARCHITECTURE

```
$ARCHITECTURE
└── src
    ├── app         # app-wide settings, styles and providers.
    ├── processes   # complex inter-page scenarios. (e.g., authentication)
    ├── pages       # compositional layer to construct full pages from entities, features and widgets.
    ├── widgets     # compositional layer to combine entities and features into meaningful blocks.(e.g. IssuesList, UserProfile)
    ├── features    # (user interactions, actions that bring business value to the user.(e.g. SendComment, AddToCart, UsersSearch)
    ├── entities    # business entities.(e.g., User, Product, Order)
    └── shared      # eusable functionality, detached from the specifics of the project/business.(e.g. UIKit, libs, API)

$CAN_USE
# app: shared, entities, features, widgets, pages, processes
# processes: shared, entities, features, widgets, pages
# pages: shared, entities, features, widgets
# widgets: shared, entities, features
# features: shared, entities
# entities: shared
# shared: -

$CAN_BE_USED_BY
# app: -
# processes: app
# pages: processes, app
# widgets: pages, processes, app
# features: widgets, pages, processes, app
# entities: features, widgets, pages, processes, app
# shared: entities, features, widgets, pages, processes, app

```
