/*
TODO: makes sense to add a timeout here since some things like gmail can
      take a long-ass time to load, and dotjs will load before that.
*/

// yeah, I don't have a droid at the moment
$('a.gbzt[href*=play]').parent().hide();

// don't care
$('a.gbzt[href*=youtube]').parent().hide();

// reeeeally don't care
$('a.gbzt[href*=plus\\.google]').parent().hide();

// ditch that annoying "+share" button
$('a.gbgt[href*=plus\\.google]:last').parent().hide();