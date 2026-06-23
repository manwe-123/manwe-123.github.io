# Engineering Portfolio

This is my undergraduate engineering portfolio showcasing projects across multiple disciplines.

## Quick Start

### Local Development

1. Install Jekyll and Bundler:
   ```bash
   gem install bundler jekyll
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the local server:
   ```bash
   bundle exec jekyll serve
   ```

4. View your site at `http://localhost:4000`

### Adding New Projects

1. Create a new markdown file in the `_projects/` directory
2. Add front matter with project metadata:
   ```yaml
   ---
   title: "Your Project Title"
   date: YYYY-MM-DD
   category: "Your Category"
   tools: "Tools & Technologies Used"
   image: "/assets/images/your-image.jpg"
   excerpt: "Brief description (1-2 sentences)"
   ---
   ```
3. Write your project content using Markdown
4. Add any images to the `assets/images/` folder

### Project Page Structure

Each project page should include:

- **Overview**: Brief introduction to the project
- **Objectives**: What you aimed to achieve
- **Methodology/Process**: How you approached the problem
- **Results**: Outcomes and metrics
- **Challenges**: Problems encountered and solutions
- **Future Work**: Potential improvements or next steps

### Customization

#### Update Site Configuration

Edit `_config.yml` to change:
- Site title and description
- GitHub username
- Theme settings

#### Modify Styling

Edit `assets/css/style.css` to customize:
- Colors
- Fonts
- Layout
- Component styles

#### Add Your Logo

Place your logo image in `assets/images/` and update `_config.yml`:
```yaml
logo: "/assets/images/your-logo.png"
```

## Deployment to GitHub Pages

1. Commit all changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. Enable GitHub Pages:
   - Go to your repository Settings
   - Navigate to Pages section
   - Select source branch (main) and folder (/root)
   - Save

Your site will be live at `https://yourusername.github.io/repository-name`

## File Structure

```
├── _config.yml           # Site configuration
├── _layouts/
│   ├── default.html      # Base layout
│   └── project.html      # Project page layout
├── _projects/            # Project markdown files
│   ├── project-1.md
│   └── project-2.md
├── assets/
│   ├── css/
│   │   └── style.css     # Custom styles
│   └── images/           # Project images
├── index.md              # Homepage
└── README.md             # This file
```

## Tips for Great Project Documentation

1. **Use High-Quality Images**: Include photos, diagrams, and screenshots
2. **Show Your Process**: Document design iterations and decision-making
3. **Include Metrics**: Quantify results whenever possible
4. **Be Specific**: Mention specific tools, technologies, and methods
5. **Tell a Story**: Structure your project as a narrative with challenges and solutions
6. **Keep It Updated**: Regularly add new projects and update existing ones

## License

This portfolio is open source and available under the [MIT License](LICENSE).
