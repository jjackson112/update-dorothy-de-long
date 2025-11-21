<?php
// Enqueue CSS and register menu if you want an editable menu in WP admin with wp_nav_menu()
    function dorothy_enqueue_styles() {
        // Tailwind CDN
        wp_enqueue_script(
            'tailwind',
            'https://cdn.tailwindcss.com',
            array(),
            null,
            false
        );

        // Optional: Your own CSS overrides (should one be added later)
        wp_enqueue_style(
            'dorothy-style',
            get_template_directory_uri() . '/assets/css/style.css',
            array(),
            '1.0'
        );
    }
    add_action('wp_enqueue_scripts', 'dorothy_enqueue_styles');

// add support for featured images
    function dorothy_theme_setup() {
        add_theme_support('post-thumbnails');
    }
    add_action('after_setup_theme', 'dorothy_theme_setup');

// override WordPress default with Tailwind styles for images
    function add_tailwind_classes_to_post_images($content) {
        
        $content = preg_replace(
            '/<img(.*?)class="(.*?)"(.*?)>/',
            '<img$1class="$2 w-full h-64 object-cover rounded-lg"$3>',
            $content
        );

        // If the image does NOT have a class attribute → add Tailwind classes
        $content = preg_replace(
            '/<img(?!.*class)(.*?)>/',
            '<img class="w-full h-64 object-cover rounded-lg"$1>',
            $content
        );

        return $content;
    }
    add_filter('the_content', 'add_tailwind_classes_to_post_images');


// Create custom post type
    function create_custom_post_types() {
        register_post_type('events',
        array(
            'labels' => array(
                'name' => __( 'Events' ),
                'singular_name' => __( 'Event' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array( 'slug' => 'events' ),
            'supports'    => array('title', 'editor', 'thumbnail', 'excerpt'),
        ));
    }
    add_action ( 'init', 'create_custom_post_types' );

// Enqueue Font Awesome icons

function enqueue_load_fa() {
    wp_enqueue_style('load-fa', 'https://use.fontawesome.com/releases/7.0.1/css/all.css');
}
add_action( 'wp_enqueue_scripts', 'enqueue_load_fa' );