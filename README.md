# KhanArtist - Angular Rich Text Editor

A modern Angular 18 application featuring a lightweight, customizable rich text editor powered by ngx-editor.

## Overview

This project integrates ngx-editor, a ProsMirror-based rich text editor for Angular applications. The editor provides essential text formatting capabilities while maintaining a clean, intuitive interface.

## Features

- Rich text editing with standard formatting options
- Real-time content preview
- Reactive form integration
- Standalone component architecture
- Modern Angular 18 implementation

## Prerequisites

- Node.js (v18 or later)
- Angular CLI 18.x
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd KhanArtist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install required animation support:
   ```bash
   npm install @angular/animations
   ```

## Structure

The application follows Angular 18's standalone component architecture:

- `src/app/app.component.ts` - Main application component
- `src/app/editor/editor.component.ts` - Rich text editor component
- `src/app/app.routes.ts` - Application routing configuration
- `src/main.ts` - Application bootstrap with animation support

## Configuration

The ngx-editor component is configured with:

- Form integration via ReactiveFormsModule
- Built-in menu for formatting options
- Content preview capability
- Proper lifecycle management (initialization and cleanup)

## Usage

To run the application in development mode:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser to view the application.

## Editor Implementation

The editor is implemented as a standalone component with the following features:

- ProseMirror-based rich text editing
- Formatting toolbar via ngx-editor-menu
- Form control integration
- Real-time content preview with HTML rendering

## Customization

You can customize the editor by:

1. Modifying the editor options in `editor.component.ts`
2. Styling the editor appearance in `editor.component.css`
3. Implementing additional features through ProseMirror plugins

## Troubleshooting

Common issues and solutions:

- **Missing animations**: Ensure @angular/animations is installed and provideAnimations() is included in main.ts
- **Editor not displaying**: Check that all required dependencies are installed
- **Toolbar not appearing**: Verify that the ngx-editor-menu component is properly configured

## Dependencies

- Angular 18.x
- ngx-editor 18.0.0
- ProseMirror libraries (automatically installed with ngx-editor)

## License

[Specify your license here]

## Contributing

[Add contribution guidelines if applicable]