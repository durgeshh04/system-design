# 2. OCP:

1. The Open-Closed Principle states that "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."

## Detailed Explanation:

1. Open for extension: This means that the behavior of the software entity can be extended, that is, we should be able to add new features or behavior to it.

2. Closed for modification: This means that once the software entity is developed and it has been reviewed and tested, the code should not be touched (to correct the software behavior).

## Advantages of Open-Closed Principles:

1. Reduced Risk of Bugs:

- Existing code isn't modified, so new features don't introduce bugs to existing functionality

2. Increased Code Reusability

- Components can be reused independently, encouraging modular design

3. Simplified Versioning and Patching

- New features are isolated to new components, simplifying version control and patching

4. Improved Maintainability

- New features are added as extensions, making the codebase easier to maintain

5. Easier Testing

- Changes are isolated to new components, so existing tests remain valid

6. Enhanced Productivity

- New features are easier and faster to develop since they don't require changing existing code

7. Code Organization

- Encourages well-structured and organized code, with a clear separation of concerns
