/* global hexo */

var merge = require('./merge');

/**
 * Merge configs in _data/next.yml into hexo.theme.config.
 * Note: configs in _data/next.yml will override configs in hexo.theme.config.
 */
hexo.on('generateBefore', function () {
  if (hexo.locals.get) {
    var data = hexo.locals.get('data');
    if ( data && data.next ) {
      if ( data.next.override ) {
        hexo.theme.config = data.next;
      } else {
        merge(hexo.theme.config, data.next);
      }
    }
  }
});

hexo.on('generateAfter', function () {
  hexo.log.info("Deployed successfully!! >> " + formatDate(new Date()));
  // hexo.log.warn("===============================================================");
  // hexo.log.warn("========================= ATTENTION! ==========================");
  // hexo.log.warn("===============================================================");
  // hexo.log.warn(" NexT repository is moving here: https://github.com/theme-next ");
  // hexo.log.warn("===============================================================");
  // hexo.log.warn(" It's rebase to v6.0.0 and future maintenance will resume there");
  // hexo.log.warn("===============================================================");
});

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
      hours = ''+ d.getHours();
      minutes = '' + d.getMinutes();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  
  return [year, month, day, hours, minutes].join('-');
}
