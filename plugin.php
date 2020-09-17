<?php
/**
 * Plugin Name: Flyn Div Block
 * Plugin URI: https://github.com/flynsarmy/flyn-wp-divblock-plugin/
 * Description: Adds a Div container block to Gutenberg
 * Author: Flyn San
 * Author URI: https://www.flynsarmy.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
