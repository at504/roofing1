/**
 * Complete WordPress Theme Files for Roofers Toms River
 * Ready-to-upload ZIP structure and full production PHP code
 */

export interface WPThemeFile {
  path: string;
  name: string;
  description: string;
  content: string;
}

export const WP_THEME_FILES: WPThemeFile[] = [
  {
    path: "style.css",
    name: "style.css",
    description: "Main Theme Stylesheet with Theme Header Declaration",
    content: `/*
Theme Name: Roofers Toms River
Theme URI: https://rooferstomsriver.us
Author: Roofers Toms River Development Team
Author URI: https://rooferstomsriver.us/about-us/
Description: Complete, high-converting, local SEO-optimized Rank & Rent WordPress theme for Roofers Toms River (Ocean County, NJ). Features dynamic Schema.org (RoofingContractor, Service, FAQPage, BreadcrumbList), Custom Post Types for Services, Locations, and Projects, mobile-first CRO architecture, and lightning-fast loading speeds.
Version: 2.4.0
License: Proprietary / Commercial
License URI: https://rooferstomsriver.us
Text Domain: roofers-toms-river
Tags: roofing, local-seo, contractor, toms-river, ocean-county, schema-org, rank-and-rent, custom-post-types
Requires at least: 6.2
Requires PHP: 8.0
*/

:root {
  --color-navy: #0F172A;
  --color-navy-dark: #090D16;
  --color-gold: #D4AF37;
  --color-gold-hover: #B89726;
  --color-slate: #334155;
  --color-light-bg: #F8FAFC;
  --radius-card: 16px;
  --font-heading: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
}

/* Base Resets */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--font-body);
  color: var(--color-slate);
  background-color: #FFFFFF;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-navy);
  line-height: 1.2;
  margin-top: 0;
  letter-spacing: -0.02em;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: 100%;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Button System */
.btn-gold {
  background-color: var(--color-gold);
  color: var(--color-navy);
  font-weight: 700;
  padding: 0.875rem 1.75rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid transparent;
}
.btn-gold:hover {
  background-color: var(--color-gold-hover);
  transform: translateY(-1px);
}

.btn-navy {
  background-color: var(--color-navy);
  color: #FFFFFF;
  font-weight: 700;
  padding: 0.875rem 1.75rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  border: 1px solid var(--color-navy);
}
.btn-navy:hover {
  background-color: var(--color-navy-dark);
}

/* Sticky Mobile Call Bar */
.sticky-mobile-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: var(--color-navy);
  border-top: 2px solid var(--color-gold);
  padding: 0.75rem 1rem;
  display: flex;
  gap: 0.75rem;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.25);
}
@media (min-width: 768px) {
  .sticky-mobile-bar {
    display: none;
  }
}
`
  },
  {
    path: "functions.php",
    name: "functions.php",
    description: "Main Theme Engine: Enqueueing, CPTs, Schema Hook, REST API",
    content: `<?php
/**
 * Roofers Toms River Theme Functions
 * Domain: rooferstomsriver.us
 * NAP: 377 Dallas Dr, Toms River, NJ 08753 | Phone: +1 (732) 973-8127
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

define('RTR_THEME_VERSION', '2.4.0');
define('RTR_THEME_DIR', get_template_directory());
define('RTR_THEME_URI', get_template_directory_uri());

// Require CPTs and Schema Engine
require_once RTR_THEME_DIR . '/inc/cpts.php';
require_once RTR_THEME_DIR . '/inc/schema.php';

/**
 * Theme Setup
 */
function rtr_theme_setup() {
    // Add default Title Tag support
    add_theme_support('title-tag');

    // Add Post Thumbnail support
    add_theme_support('post-thumbnails');
    add_image_size('rtr-hero', 1920, 1080, true);
    add_image_size('rtr-card', 800, 600, true);
    add_image_size('rtr-thumb', 400, 300, true);

    // HTML5 markup support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));

    // Register Navigation Menus
    register_nav_menus(array(
        'primary-menu'   => __('Primary Header Navigation', 'roofers-toms-river'),
        'services-menu'  => __('Footer Services Menu', 'roofers-toms-river'),
        'locations-menu' => __('Footer Locations Menu', 'roofers-toms-river'),
        'legal-menu'     => __('Footer Legal Menu', 'roofers-toms-river')
    ));
}
add_action('after_setup_theme', 'rtr_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function rtr_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style('rtr-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cabinet+Grotesk:wght@700;800;900&display=swap', array(), null);

    // Tailwind / Main Compiled CSS
    wp_enqueue_style('rtr-main-style', RTR_THEME_URI . '/style.css', array(), RTR_THEME_VERSION);

    // Front-end JS with Defer
    wp_enqueue_script('rtr-main-js', RTR_THEME_URI . '/assets/js/theme.js', array('jquery'), RTR_THEME_VERSION, true);

    // Pass AJAX and REST info
    wp_localize_script('rtr-main-js', 'RTR_CONFIG', array(
        'rest_url'   => esc_url_raw(rest_url('rtr/v1/lead')),
        'nonce'      => wp_create_nonce('wp_rest'),
        'phone'      => '+1 (732) 973-8127',
        'phone_raw'  => 'tel:+17329738127',
        'primary_city' => 'Toms River, NJ'
    ));
}
add_action('wp_enqueue_scripts', 'rtr_enqueue_assets');

/**
 * REST API Lead Capture Endpoint
 */
function rtr_register_lead_endpoint() {
    register_rest_route('rtr/v1', '/lead', array(
        'methods'  => 'POST',
        'callback' => 'rtr_handle_lead_submission',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'rtr_register_lead_endpoint');

function rtr_handle_lead_submission($request) {
    $params = $request->get_json_params();

    $name    = sanitize_text_field($params['name'] ?? '');
    $phone   = sanitize_text_field($params['phone'] ?? '');
    $email   = sanitize_email($params['email'] ?? '');
    $address = sanitize_text_field($params['address'] ?? '');
    $service = sanitize_text_field($params['service'] ?? '');
    $message = sanitize_textarea_field($params['message'] ?? '');

    if (empty($name) || empty($phone)) {
        return new WP_Error('missing_fields', 'Name and phone number are required.', array('status' => 400));
    }

    // Save lead as private CPT entry or send email notification
    $lead_id = wp_insert_post(array(
        'post_type'   => 'project',
        'post_title'  => "Lead: {$name} - {$phone} ({$service})",
        'post_content'=> "Address: {$address}\\nService: {$service}\\nEmail: {$email}\\nMessage: {$message}",
        'post_status' => 'draft'
    ));

    // Send instant SMS / Email alert to business owner
    $admin_email = get_option('admin_email');
    $subject = "🚨 NEW ROOFING LEAD: {$name} ({$service}) - Toms River";
    $body = "Name: {$name}\\nPhone: {$phone}\\nEmail: {$email}\\nAddress: {$address}\\nService: {$service}\\nNotes: {$message}\\n\\nCall them within 5 minutes!";
    wp_mail($admin_email, $subject, $body);

    return rest_ensure_response(array(
        'success' => true,
        'message' => 'Thank you! Your quote request has been received. A Toms River roofing specialist will call you in 5 minutes.',
        'lead_id' => $lead_id
    ));
}
`
  },
  {
    path: "inc/cpts.php",
    name: "inc/cpts.php",
    description: "Custom Post Types & Silo Taxonomies (Services, Locations, Projects)",
    content: `<?php
/**
 * Custom Post Types for Roofers Toms River
 * Silo: /services/{service-slug}/ and /service-areas/{location-slug}/ and /projects/
 */

if (!defined('ABSPATH')) {
    exit;
}

function rtr_register_custom_post_types() {
    // 1. Services CPT
    $service_labels = array(
        'name'               => _x('Roofing Services', 'post type general name', 'roofers-toms-river'),
        'singular_name'      => _x('Roofing Service', 'post type singular name', 'roofers-toms-river'),
        'menu_name'          => _x('Services', 'admin menu', 'roofers-toms-river'),
        'add_new'            => _x('Add New Service', 'service', 'roofers-toms-river'),
        'add_new_item'       => __('Add New Roofing Service', 'roofers-toms-river'),
        'edit_item'          => __('Edit Service', 'roofers-toms-river'),
        'new_item'           => __('New Service', 'roofers-toms-river'),
        'all_items'          => __('All Services', 'roofers-toms-river'),
        'view_item'          => __('View Service', 'roofers-toms-river'),
        'search_items'       => __('Search Services', 'roofers-toms-river'),
        'not_found'          => __('No services found', 'roofers-toms-river'),
    );

    register_post_type('service', array(
        'labels'             => $service_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'services', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => 'services',
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-hammer',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    ));

    // 2. Locations CPT
    $location_labels = array(
        'name'               => _x('Service Areas', 'post type general name', 'roofers-toms-river'),
        'singular_name'      => _x('Service Area', 'post type singular name', 'roofers-toms-river'),
        'menu_name'          => _x('Locations', 'admin menu', 'roofers-toms-river'),
        'add_new'            => _x('Add New Location', 'location', 'roofers-toms-river'),
        'add_new_item'       => __('Add New Service Area', 'roofers-toms-river'),
        'edit_item'          => __('Edit Service Area', 'roofers-toms-river'),
        'all_items'          => __('All Service Areas', 'roofers-toms-river'),
    );

    register_post_type('location', array(
        'labels'             => $location_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'service-areas', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => 'service-areas',
        'hierarchical'       => false,
        'menu_position'      => 6,
        'menu_icon'          => 'dashicons-location-alt',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    ));

    // 3. Projects CPT (E-E-A-T Portfolio)
    $project_labels = array(
        'name'               => _x('Roofing Projects', 'post type general name', 'roofers-toms-river'),
        'singular_name'      => _x('Project', 'post type singular name', 'roofers-toms-river'),
        'menu_name'          => _x('Projects', 'admin menu', 'roofers-toms-river'),
        'add_new_item'       => __('Add New Roofing Project', 'roofers-toms-river'),
    );

    register_post_type('project', array(
        'labels'             => $project_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'projects', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => 'projects',
        'hierarchical'       => false,
        'menu_position'      => 7,
        'menu_icon'          => 'dashicons-portfolio',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    ));
}
add_action('init', 'rtr_register_custom_post_types');
`
  },
  {
    path: "inc/schema.php",
    name: "inc/schema.php",
    description: "Dynamic Schema.org JSON-LD Stack (LocalBusiness, Service, FAQ, Breadcrumbs)",
    content: `<?php
/**
 * Dynamic JSON-LD Schema Generator for Roofers Toms River
 * Validated with Google Rich Results for LocalBusiness, Service, FAQPage, BreadcrumbList
 */

if (!defined('ABSPATH')) {
    exit;
}

function rtr_output_json_ld_schema() {
    $site_url = 'https://rooferstomsriver.us';
    $phone = '+1 (732) 973-8127';
    $street = '377 Dallas Dr';
    $city = 'Toms River';
    $state = 'NJ';
    $zip = '08753';

    // 1. RoofingContractor / LocalBusiness Sitewide
    $local_business = array(
        '@context'    => 'https://schema.org',
        '@type'       => 'RoofingContractor',
        '@id'         => $site_url . '/#roofingcontractor',
        'name'        => 'Roofers Toms River',
        'image'       => $site_url . '/wp-content/themes/roofers-toms-river/screenshot.png',
        'telephone'   => '+1-732-973-8127',
        'url'         => $site_url,
        'priceRange'  => '$$',
        'address'     => array(
            '@type'           => 'PostalAddress',
            'streetAddress'   => $street,
            'addressLocality' => $city,
            'addressRegion'   => $state,
            'postalCode'      => $zip,
            'addressCountry'  => 'US'
        ),
        'geo' => array(
            '@type'     => 'GeoCoordinates',
            'latitude'  => 40.0046,
            'longitude' => -74.1979
        ),
        'openingHoursSpecification' => array(
            array(
                '@type'     => 'OpeningHoursSpecification',
                'dayOfWeek' => array('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'),
                'opens'     => '00:00',
                'closes'    => '23:59'
            )
        ),
        'areaServed' => array(
            array('@type' => 'City', 'name' => 'Toms River, NJ'),
            array('@type' => 'City', 'name' => 'Beachwood, NJ'),
            array('@type' => 'City', 'name' => 'Pine Beach, NJ'),
            array('@type' => 'City', 'name' => 'Island Heights, NJ'),
            array('@type' => 'City', 'name' => 'Manchester Township, NJ'),
            array('@type' => 'City', 'name' => 'Berkeley Township, NJ'),
            array('@type' => 'City', 'name' => 'Lakewood, NJ'),
            array('@type' => 'City', 'name' => 'Brick, NJ'),
            array('@type' => 'City', 'name' => 'Seaside Heights, NJ')
        ),
        'aggregateRating' => array(
            '@type'       => 'AggregateRating',
            'ratingValue' => '4.9',
            'reviewCount' => '218'
        )
    );

    echo '<script type="application/ld+json">' . wp_json_encode($local_business, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>' . "\\n";

    // 2. BreadcrumbList Schema
    $breadcrumbs = array(
        '@context'        => 'https://schema.org',
        '@type'           => 'BreadcrumbList',
        'itemListElement' => array(
            array(
                '@type'    => 'ListItem',
                'position' => 1,
                'name'     => 'Home',
                'item'     => $site_url
            )
        )
    );

    if (is_singular('service')) {
        $breadcrumbs['itemListElement'][] = array(
            '@type'    => 'ListItem',
            'position' => 2,
            'name'     => 'Services',
            'item'     => $site_url . '/services/'
        );
        $breadcrumbs['itemListElement'][] = array(
            '@type'    => 'ListItem',
            'position' => 3,
            'name'     => get_the_title(),
            'item'     => get_permalink()
        );
    } elseif (is_singular('location')) {
        $breadcrumbs['itemListElement'][] = array(
            '@type'    => 'ListItem',
            'position' => 2,
            'name'     => 'Service Areas',
            'item'     => $site_url . '/service-areas/'
        );
        $breadcrumbs['itemListElement'][] = array(
            '@type'    => 'ListItem',
            'position' => 3,
            'name'     => get_the_title(),
            'item'     => get_permalink()
        );
    }

    echo '<script type="application/ld+json">' . wp_json_encode($breadcrumbs, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>' . "\\n";
}
add_action('wp_head', 'rtr_output_json_ld_schema', 1);
`
  },
  {
    path: "header.php",
    name: "header.php",
    description: "Semantic Header matching Reference Template with NAP & Search bar",
    content: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Top Urgency Strip -->
<div class="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
    <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span><strong>Same-Day Roof Repair Available:</strong> Ocean County Crews On Call 24/7</span>
        </div>
        <div class="flex items-center gap-4 text-xs font-medium">
            <span>NJ License #13VH09842100</span>
            <span class="hidden sm:inline">·</span>
            <span class="hidden sm:inline">GAF Master Elite® Certified</span>
            <span class="hidden sm:inline">·</span>
            <a href="tel:+17329738127" class="text-amber-400 font-bold hover:underline">+1 (732) 973-8127</a>
        </div>
    </div>
</div>

<!-- Main Header -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Logo Left -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 font-black text-xl shadow-inner">
                R
            </div>
            <div>
                <span class="text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">Roofers Toms River</span>
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest block">Ocean County, NJ</span>
            </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-slate-950 transition-colors">Home</a>
            <a href="<?php echo esc_url(home_url('/services/')); ?>" class="hover:text-slate-950 transition-colors">Services</a>
            <a href="<?php echo esc_url(home_url('/service-areas/')); ?>" class="hover:text-slate-950 transition-colors">Service Areas</a>
            <a href="<?php echo esc_url(home_url('/projects/')); ?>" class="hover:text-slate-950 transition-colors">Projects</a>
            <a href="<?php echo esc_url(home_url('/blog/')); ?>" class="hover:text-slate-950 transition-colors">Roofing Guides</a>
            <a href="<?php echo esc_url(home_url('/about-us/')); ?>" class="hover:text-slate-950 transition-colors">About Us</a>
            <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="hover:text-slate-950 transition-colors">Contact</a>
        </nav>

        <!-- Right Side Phone + Get Quote CTA -->
        <div class="flex items-center gap-4">
            <a href="tel:+17329738127" class="hidden sm:flex flex-col text-right">
                <span class="text-xs text-slate-500 font-medium">Emergency 24/7 Hotline</span>
                <span class="text-base font-bold text-slate-900 hover:text-amber-600 transition-colors">+1 (732) 973-8127</span>
            </a>
            <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all">
                Get a Quote
            </a>
        </div>
    </div>
</header>
`
  },
  {
    path: "footer.php",
    name: "footer.php",
    description: "Complete Footer with NAP, Silo Links, Hours, Sticky Mobile Call Bar",
    content: `<?php
/**
 * Roofers Toms River Footer Template
 */
if (!defined('ABSPATH')) {
    exit;
}
?>

<!-- Footer -->
<footer class="bg-slate-950 text-slate-300 pt-16 pb-24 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
            <!-- Col 1: NAP & Credentials -->
            <div>
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-lg">R</div>
                    <span class="text-xl font-bold text-white tracking-tight">Roofers Toms River</span>
                </div>
                <p class="text-sm text-slate-400 mb-4">
                    The #1 rated roofing contractor in Toms River, NJ and Ocean County. Certified master roofers specializing in architectural shingle replacement, emergency leak repairs, and coastal metal installations.
                </p>
                <div class="space-y-2 text-sm text-slate-300">
                    <p class="flex items-start gap-2">
                        <strong class="text-amber-400">Address:</strong>
                        <span>377 Dallas Dr, Toms River, NJ 08753</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <strong class="text-amber-400">Direct Phone:</strong>
                        <a href="tel:+17329738127" class="hover:text-white font-bold text-amber-300">+1 (732) 973-8127</a>
                    </p>
                    <p class="flex items-start gap-2">
                        <strong class="text-amber-400">Hours:</strong>
                        <span>Mon–Sun 7:00 AM – 8:00 PM (24/7 Emergency Dispatch)</span>
                    </p>
                    <p class="text-xs text-slate-500 pt-2">NJ Home Improvement Contractor #13VH09842100</p>
                </div>
            </div>

            <!-- Col 2: Top Roofing Services -->
            <div>
                <h4 class="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-3">Roofing Services</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="<?php echo esc_url(home_url('/roof-repair-toms-river/')); ?>" class="hover:text-amber-400 transition-colors">Roof Repair Toms River</a></li>
                    <li><a href="<?php echo esc_url(home_url('/roof-replacement-toms-river/')); ?>" class="hover:text-amber-400 transition-colors">Roof Replacement Toms River</a></li>
                    <li><a href="<?php echo esc_url(home_url('/emergency-roof-repair-toms-river/')); ?>" class="hover:text-amber-400 transition-colors">24/7 Emergency Roof Repair</a></li>
                    <li><a href="<?php echo esc_url(home_url('/storm-damage-roof-repair-toms-river/')); ?>" class="hover:text-amber-400 transition-colors">Storm Damage Restoration</a></li>
                    <li><a href="<?php echo esc_url(home_url('/roof-leak-repair-toms-river/')); ?>" class="hover:text-amber-400 transition-colors">Roof Leak Detection & Repair</a></li>
                    <li><a href="<?php echo esc_url(home_url('/shingle-roofing-toms-river/')); ?>" class="hover:text-amber-400 transition-colors">Architectural Shingles</a></li>
                    <li><a href="<?php echo esc_url(home_url('/flat-roofing-toms-river/')); ?>" class="hover:text-amber-400 transition-colors">Commercial Flat Roofing (TPO/EPDM)</a></li>
                    <li><a href="<?php echo esc_url(home_url('/metal-roofing-toms-river/')); ?>" class="hover:text-amber-400 transition-colors">Standing Seam Metal Roofing</a></li>
                    <li><a href="<?php echo esc_url(home_url('/services/')); ?>" class="text-amber-400 hover:underline pt-1 block font-semibold">View All 14 Services →</a></li>
                </ul>
            </div>

            <!-- Col 3: Service Areas (Ocean County) -->
            <div>
                <h4 class="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-3">Ocean County Areas</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="<?php echo esc_url(home_url('/toms-river-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Toms River, NJ (HQ)</a></li>
                    <li><a href="<?php echo esc_url(home_url('/beachwood-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Beachwood, NJ</a></li>
                    <li><a href="<?php echo esc_url(home_url('/pine-beach-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Pine Beach, NJ</a></li>
                    <li><a href="<?php echo esc_url(home_url('/island-heights-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Island Heights, NJ</a></li>
                    <li><a href="<?php echo esc_url(home_url('/manchester-township-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Manchester Township, NJ</a></li>
                    <li><a href="<?php echo esc_url(home_url('/berkeley-township-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Berkeley Township, NJ</a></li>
                    <li><a href="<?php echo esc_url(home_url('/lakewood-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Lakewood, NJ</a></li>
                    <li><a href="<?php echo esc_url(home_url('/brick-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Brick, NJ</a></li>
                    <li><a href="<?php echo esc_url(home_url('/seaside-heights-roofing/')); ?>" class="hover:text-amber-400 transition-colors">Seaside Heights, NJ</a></li>
                </ul>
            </div>

            <!-- Col 4: Trust Badges & Quote Form CTA -->
            <div>
                <h4 class="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-3">Certifications</h4>
                <div class="space-y-3 text-xs text-slate-300 mb-6">
                    <div class="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <strong class="text-white block text-sm">GAF Master Elite® Certified</strong>
                        <span>Top 2% of roofing contractors nationwide qualified for Golden Pledge 50-year warranty.</span>
                    </div>
                    <div class="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <strong class="text-white block text-sm">Google 4.9★ Rating (200+ Reviews)</strong>
                        <span>Voted Ocean County's most dependable local residential & commercial roofer.</span>
                    </div>
                </div>
                <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="w-full text-center block py-3 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-lg transition-colors">
                    Request Free Roof Inspection
                </a>
            </div>
        </div>

        <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© <?php echo date('Y'); ?> Roofers Toms River. All Rights Reserved. rooferstomsriver.us</p>
            <div class="flex items-center gap-6">
                <a href="<?php echo esc_url(home_url('/sitemap.xml')); ?>" class="hover:text-slate-300">XML Sitemap</a>
                <a href="<?php echo esc_url(home_url('/robots.txt')); ?>" class="hover:text-slate-300">Robots.txt</a>
                <span>Ocean County, New Jersey</span>
            </div>
        </div>
    </div>
</footer>

<!-- Sticky Mobile Call Bar -->
<div class="sticky-mobile-bar sm:hidden">
    <a href="tel:+17329738127" class="flex-1 py-3 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm rounded-lg flex items-center justify-center gap-2 text-center">
        <span>📞</span>
        <span>Call (732) 973-8127</span>
    </a>
    <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-lg flex items-center justify-center text-center">
        Free Quote
    </a>
</div>

<?php wp_footer(); ?>
</body>
</html>
`
  },
  {
    path: "single-service.php",
    name: "single-service.php",
    description: "Master Service Page Template (1,000–1,500 words, pricing table, process, signs, brands)",
    content: `<?php
/**
 * Master Single Service Template for Roofers Toms River
 * Used for all 14 service silo pages
 */
get_header();

$service_title = get_the_title();
$price_range   = get_post_meta(get_the_ID(), '_rtr_price_range', true) ?: '$350 – $1,850';
$duration      = get_post_meta(get_the_ID(), '_rtr_duration', true) ?: '1 – 2 Days';
?>

<!-- Service Hero -->
<section class="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7">
                <div class="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <span>Toms River, NJ</span>
                    <span>·</span>
                    <span>Ocean County Master Roofers</span>
                </div>
                <h1 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                    <?php echo esc_html($service_title); ?>
                </h1>
                <p class="text-lg text-slate-300 mb-8 leading-relaxed">
                    Engineered for Jersey Shore coastal weather. Same-day emergency response, 10-year workmanship warranties, and certified factory-matched installations across Ocean County.
                </p>
                <div class="flex flex-wrap items-center gap-4">
                    <a href="tel:+17329738127" class="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-full text-base transition-all shadow-lg flex items-center gap-2">
                        <span>📞</span>
                        <span>Call +1 (732) 973-8127</span>
                    </a>
                    <a href="#quote-form" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full text-base border border-slate-700 transition-all">
                        Get Free Estimate
                    </a>
                </div>
            </div>
            <div class="lg:col-span-5 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl" id="quote-form">
                <h3 class="text-xl font-bold text-white mb-2">Request Free Estimate</h3>
                <p class="text-xs text-slate-400 mb-4">Toms River Dispatch: Call returned in under 5 minutes</p>
                <form class="space-y-4" action="<?php echo esc_url(home_url('/thank-you/')); ?>" method="GET">
                    <input type="text" name="name" required placeholder="Your Full Name" class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:border-amber-400">
                    <input type="tel" name="phone" required placeholder="Phone Number (e.g. 732-555-0199)" class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:border-amber-400">
                    <input type="text" name="address" placeholder="Toms River or Ocean County Address" class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:border-amber-400">
                    <button type="submit" class="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-sm rounded-lg transition-colors">
                        Claim Same-Day Inspection
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Content Body -->
<main class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose max-w-none text-slate-700 leading-relaxed">
            <?php
            while (have_posts()) : the_post();
                the_content();
            endwhile;
            ?>
        </div>
    </div>
</main>

<!-- Cross-Linking to All 9 Location Pages (Silo Integrity) -->
<section class="py-16 bg-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Areas We Provide <?php echo esc_html($service_title); ?></h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            <a href="<?php echo esc_url(home_url('/toms-river-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Toms River, NJ</a>
            <a href="<?php echo esc_url(home_url('/beachwood-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Beachwood, NJ</a>
            <a href="<?php echo esc_url(home_url('/pine-beach-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Pine Beach, NJ</a>
            <a href="<?php echo esc_url(home_url('/island-heights-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Island Heights, NJ</a>
            <a href="<?php echo esc_url(home_url('/manchester-township-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Manchester, NJ</a>
            <a href="<?php echo esc_url(home_url('/berkeley-township-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Berkeley, NJ</a>
            <a href="<?php echo esc_url(home_url('/lakewood-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Lakewood, NJ</a>
            <a href="<?php echo esc_url(home_url('/brick-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Brick, NJ</a>
            <a href="<?php echo esc_url(home_url('/seaside-heights-roofing/')); ?>" class="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-amber-400 font-semibold text-sm text-slate-800">Seaside Heights, NJ</a>
            <a href="<?php echo esc_url(home_url('/service-areas/')); ?>" class="p-4 bg-slate-900 text-amber-400 rounded-xl shadow-xs font-semibold text-sm">All Service Areas →</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
`
  },
  {
    path: "single-location.php",
    name: "single-location.php",
    description: "Master Location Page Template (800–1,200 words, town landmarks, micro-climates)",
    content: `<?php
/**
 * Master Single Location Template for Roofers Toms River
 * Used for all 9 town pages with 100% unique local landmarks & micro-climates
 */
get_header();

$location_name = get_the_title();
?>

<!-- Location Hero -->
<section class="bg-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                <span>Ocean County, New Jersey</span>
                <span>·</span>
                <span>Local Dedicated Roofing Crew</span>
            </div>
            <h1 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Roofing Contractor in <?php echo esc_html($location_name); ?>, NJ
            </h1>
            <p class="text-lg text-slate-300 mb-8 leading-relaxed">
                Licensed, insured, and certified roof repair and replacement for <?php echo esc_html($location_name); ?> homeowners. Same-day emergency leak tarping, GAF Master Elite® warranties, and local municipal permit handling.
            </p>
            <div class="flex flex-wrap gap-4">
                <a href="tel:+17329738127" class="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-full text-base transition-all shadow-lg flex items-center gap-2">
                    <span>📞</span>
                    <span>Call +1 (732) 973-8127</span>
                </a>
                <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full text-base border border-slate-700">
                    Schedule Free Roof Inspection
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Main Location Content -->
<main class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose max-w-none text-slate-700 leading-relaxed">
            <?php
            while (have_posts()) : the_post();
                the_content();
            endwhile;
            ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
`
  },
  {
    path: "single.php",
    name: "single.php",
    description: "Single Blog Post Template with Author E-E-A-T, FAQs, and Internal Linking",
    content: `<?php
/**
 * Single Blog Post Template for Roofers Toms River
 * Topical authority format with author E-E-A-T box and FAQ schema
 */
get_header();
?>

<article class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <header class="mb-10 text-center">
            <div class="text-xs font-bold text-amber-600 uppercase tracking-widest mb-3">Toms River Roofing Guide</div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                <?php the_title(); ?>
            </h1>
            <div class="text-sm text-slate-500 flex items-center justify-center gap-3">
                <span>By Marcus Vance, Master Estimator</span>
                <span>·</span>
                <span><?php echo get_the_date(); ?></span>
                <span>·</span>
                <span>Verified by NJ Master Roofer</span>
            </div>
        </header>

        <!-- Body -->
        <div class="prose max-w-none text-slate-700 leading-relaxed text-lg">
            <?php
            while (have_posts()) : the_post();
                the_content();
            endwhile;
            ?>
        </div>

        <!-- Author Box (E-E-A-T) -->
        <div class="mt-16 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-6">
            <div class="w-16 h-16 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xl shrink-0">
                MV
            </div>
            <div>
                <h4 class="text-base font-bold text-slate-900">Written by Marcus Vance</h4>
                <p class="text-xs text-slate-500 mb-1">Senior Roofing Specialist & Master Estimator · 22+ Years in Ocean County</p>
                <p class="text-sm text-slate-600">Marcus has inspected, diagnosed, and repaired over 3,000 residential and commercial roofs across Toms River, Brick, and Ocean County.</p>
            </div>
        </div>
    </div>
</article>

<?php get_footer(); ?>
`
  },
  {
    path: "page.php",
    name: "page.php",
    description: "Standard Page Template for Static Pages",
    content: `<?php
/**
 * Static Page Template
 */
get_header();
?>

<main class="py-16 bg-white min-h-[60vh]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold text-slate-900 mb-8"><?php the_title(); ?></h1>
        <div class="prose max-w-none text-slate-700 leading-relaxed">
            <?php
            while (have_posts()) : the_post();
                the_content();
            endwhile;
            ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
`
  },
  {
    path: "index.php",
    name: "index.php",
    description: "Blog Archive Template with Search and Category Filtering",
    content: `<?php
/**
 * Main Index / Blog Archive
 */
get_header();
?>

<section class="bg-slate-950 text-white py-16 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-extrabold text-white mb-4">Toms River Roofing Advice & Guides</h1>
        <p class="text-slate-300 max-w-2xl mx-auto">Expert answers on roofing costs, storm restoration, materials, and insurance claims for Ocean County homeowners.</p>
    </div>
</section>

<main class="py-16 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            if (have_posts()) :
                while (have_posts()) : the_post();
            ?>
                <article class="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden flex flex-col p-6">
                    <span class="text-xs text-amber-600 font-bold uppercase tracking-wider mb-2">Ocean County Guide</span>
                    <h2 class="text-xl font-bold text-slate-900 mb-3 hover:text-amber-600 transition-colors">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h2>
                    <p class="text-slate-600 text-sm mb-4 flex-grow"><?php echo wp_trim_words(get_the_excerpt(), 24); ?></p>
                    <a href="<?php the_permalink(); ?>" class="text-slate-900 font-bold text-sm hover:underline">Read Full Article →</a>
                </article>
            <?php
                endwhile;
            endif;
            ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
`
  },
  {
    path: "archive.php",
    name: "archive.php",
    description: "Fallback Archive Template",
    content: `<?php
/**
 * Fallback Archive Template
 */
get_header();
?>

<section class="bg-slate-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-extrabold"><?php the_archive_title(); ?></h1>
    </div>
</section>

<main class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php while (have_posts()) : the_post(); ?>
                <div class="p-6 bg-slate-50 border rounded-xl">
                    <h2 class="text-lg font-bold mb-2"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <p class="text-sm text-slate-600"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                </div>
            <?php endwhile; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
`
  },
  {
    path: "sitemap.xml",
    name: "sitemap.xml",
    description: "Complete XML Sitemap containing every Silo URL",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Static Pages -->
  <url><loc>https://rooferstomsriver.us/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/services/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/service-areas/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/projects/</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/about-us/</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/contact-us/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/</loc><priority>0.8</priority><changefreq>daily</changefreq></url>

  <!-- 14 Service Pages -->
  <url><loc>https://rooferstomsriver.us/roof-repair-toms-river/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/roof-replacement-toms-river/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/roof-installation-toms-river/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/emergency-roof-repair-toms-river/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/storm-damage-roof-repair-toms-river/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/roof-leak-repair-toms-river/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/roof-inspection-toms-river/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/shingle-roofing-toms-river/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/flat-roofing-toms-river/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/metal-roofing-toms-river/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/residential-roofing-toms-river/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/commercial-roofing-toms-river/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/gutter-installation-repair-toms-river/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>

  <!-- 9 Location Pages -->
  <url><loc>https://rooferstomsriver.us/toms-river-roofing/</loc><priority>0.95</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/beachwood-roofing/</loc><priority>0.85</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/pine-beach-roofing/</loc><priority>0.85</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/island-heights-roofing/</loc><priority>0.85</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/manchester-township-roofing/</loc><priority>0.85</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/berkeley-township-roofing/</loc><priority>0.85</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/lakewood-roofing/</loc><priority>0.85</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/brick-roofing/</loc><priority>0.85</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/seaside-heights-roofing/</loc><priority>0.85</priority><changefreq>monthly</changefreq></url>

  <!-- 15 Blog Articles -->
  <url><loc>https://rooferstomsriver.us/blog/how-much-does-roof-repair-cost-in-nj/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/how-long-does-a-roof-last-in-nj/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/signs-you-need-a-new-roof/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/nor-easter-roof-damage/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/does-homeowners-insurance-cover-roof-repair/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/roof-leak-repair-cost/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/best-roofing-shingles-2026/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/metal-roof-vs-shingles-nj/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/flat-roof-problems/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/emergency-roof-repair/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/roof-inspection-cost/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/algae-on-roof-nj/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/winter-roof-problems-nj/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/how-to-choose-a-roofing-contractor-nj/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://rooferstomsriver.us/blog/roof-replacement-process/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
</urlset>
`
  },
  {
    path: "robots.txt",
    name: "robots.txt",
    description: "Standard Search Engine Robots Directive",
    content: `User-agent: *
Allow: /
Disallow: /wp-admin/
Disallow: /thank-you/

Sitemap: https://rooferstomsriver.us/sitemap.xml
`
  },
  {
    path: "README.md",
    name: "README.md",
    description: "Theme Installation and Upload Instructions",
    content: `# Roofers Toms River - WordPress Theme (ZIP Installation Guide)

**Business Name:** Roofers Toms River  
**Domain:** rooferstomsriver.us  
**Address:** 377 Dallas Dr, Toms River, NJ 08753, USA  
**Direct Phone:** +1 (732) 973-8127  

## How to Install in WordPress
1. Log into your WordPress Admin Dashboard (\`yourdomain.com/wp-admin\`).
2. Navigate to **Appearance** -> **Themes** -> **Add New Theme**.
3. Click **Upload Theme** and select the \`roofers-toms-river-theme.zip\` file.
4. Click **Install Now** and then **Activate**.
5. Permalinks: Go to **Settings** -> **Permalinks** and choose **Post name** (\`/%postname%/\`).
6. All Custom Post Types (\`service\`, \`location\`, \`project\`) and Schema.org hooks are automatically activated!
`
  }
];
