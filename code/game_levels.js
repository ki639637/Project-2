var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                         xx!!!!x",
   "                                                                          xxxx!x",
   "                                                o                           xxxx",
   "                                                                              xx",
   "                                                o                              x",
   "  xx                       o o o                             xxxxxx!xx         x",
   "xxx                     o    3               xxxxxxx        xxxxxxxxxx!x     x x",
   "xxx                        xxxxx   xxxxxx      x x          xx!!!xx!!!xxx    xxx",
   "xxx                     o   xxx     xxxxxx                     v    v         xx",
   "xxxx                                    xxxx                                   x",
   "xxx                     o          xxxx!!xxx                o   o o   o        x",
   "xx!           33                   xxx!!!!xxx         x                        x",
   " x!      x  xxxxx       o     x    xxxx!!xxxxx       xxx   x xxxxxxxxx     p   x",
   " x!  @   x!!xxxxxx  xx       xx   xx  xxxxxxxxxx   xxxxxxxxxxx!xx!xx!xxx  jjj  x",
   " xxxxxxxxxx!!!!xxxxxxxxyyyxxxxx!!!xxxxxxx   xxxx!!!xx xxxxxxxxx!!!!!xxxxxxxxxxxx",
   "  xxxxxxxxxxx!!!!xxxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxx!!!!xxxxxxxxxxxxxxxxxxxxxxxxxx",
   " xxxxxxx x xxxxxx!xxxxxxxxxx!!xxxxx!!!!!!!!x  x  xxxxxxxxxxxxx!!!!!!!!xxxxxxxxxx",
   " xxxxxxxxxxxxxx!xxxxx!xx!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                "],
  ["                                      x!!x          xxxxxxxxxxxxxxxxxxxxx                                         ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       vv        xxxx      xxx!!!!!x!!!x                                          ",
   "xxxxxxxxxxx!xxxxxxxxxxx!!xxxxxxxxxxx          xxx            xxxxxxxxxx  x          3                     3       ",
   "xxxx!xx   x!x        xx!xx x xxxxxxxxx     x xx                                                                   ",
   "xx  !      !          x!x     xxxxxxx!!!!!xxxx                 o  o   o                                           ",
   "x   v      v           !       xxxxx!!!!!!xxx                3      3                                             ",
   "x      3               v        xxxxxx!!!!xx             xxxxxxxxxxxxxxxxxxx                                      ",
   "x                              xxxxxx!!xxxx            x xxxxxxxxx  x!!!!x                            3           ",
   "x                              xxxxx!xxxxx        x       xx          !!xxx                                       ",
   "x                               xxx!xxxxx         xxx     xxxxx        v                                          ",
   "x                                xxxxxxxx                xxxxxxxx                                                 ",
   "x             xxx         o                            oxxxxxx                                                    ",
   "x        @  xxxx            o     o o o               xxxxxxxxxxx                        o                        ",
   "x        x xxxx         3     o   xxxxx           x o   xx       xxx                   o   o                      ",
   "x       xxxxxxxxxxx             xxxxxxx         xx      xx     3    x!!!!!x         o    o    o                   ",
   "x        xxxxxxxxxxxyyy     yyxxxxxxxxxxx       x   o  xxx xx        xxxxx               o               p        ",
   "x xx         xxxxxxxx!!!!!!!xxxxxxxxxxxxx     xxxx    xxxx xxxxx!!xxxxxxxxx            o   o            jjj       ",
   "xxxxxxxxxxxxxxxxxxxxxxx!!!!xxxxxxxxxxxxxxxxxxxxxxxxyyxxxxxxxxxx!!!!xxxxxxxxx             o           xxxxxxxxxxx  ",
   "xxxxxxx!!!!!xxxxxxxxx!!x!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!xxxxxxxxxxxx             o             xxxxxxx    ",
   "xxxxxxx!!x!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!xx xxxx                                     xxxx      ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!xxxxxxxxxx   3                                         ",
   "xxxxxxx!!xx!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!xxxxxxxxxx           |  |   xyyyyyyyyyx  |         xx x  ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                  xxxxxxxxxxxx",
   "                                                                                                   x xx    x x",
   "                                         o   o  o o o                                                        x",
   "                                         o o o    o                             o                 o   o   o  x",
   "  x                                      o   o  o o o                                    o                  xx",
   "  x           o                                                                              xxxxxxxxxxxxxxxxx",
   "  x!!!|       p                                           xx                          xxxxxxxxxxxx  xxxxxx!!!x",
   "  xxx!!!  |  jjj           3        xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                 xxxxxxxxx              xxxxx",
   "  xxxxx!!!!!xxxxx!!!               xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                     xxx",
   "  xxxxxxx!!xxxxxxx!xxxxxxxxxxxxxxxxx!!!!xxx           xxxxxxxxx!!!!xxxxx                        3           xx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  o                  |     xxxxxxxx                                 ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxx                              xxxxxx                               ",
   "  xxxxxxxxx                xxxx          xxxx                            xxxxxxxxx                            ",
   "  x  xx                                                   xx             xxx!!!!xxxxxx                        ",
   "  x                                               xxxxxxxxxxxx             x!!!!x   xxxxxxxxxxx             xx",
   " xx                                               xxxxx                      v         xxx!xxx              xx",
   " xx            o  o      3        o  o           xxx    o                                xx                  x",
   " xx          xxxxxxxx   xxxx    xxxxxxxx      xxxxxx  o o o                                    xxxxxxxx      x",
   " xx                                               xxx   o                                      xxxxxx        x",
   " xx                                               xx                                                         x",
   " xx   @              3   o   3   o    3    |   3  xxxx                                                       x",
   " xxxxxxyy        xxxxxxxxxxxxxxxxxxxxxxxxx!!xxxxxxxxx!!x!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx        3          xxxx",
   " xxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxx!xxx!!!!xxxxx!!!!!xxx!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   " !!xxx!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!xxx!xxxx!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   " !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                          o       o      o                   o    o o o o o  o     o  o o o                   ",
   "                          o       o       o                 o         o      o o   o  o o o                   ",
   "                          o       o        o       o       o          o      o  o  o  o o o                   ",
   "                          o       o         o    o   o    o           o      o   o o                          ",
   "                            o o o            o o       o o        o o o o o  o    oo  o o o                   ",
   "                                                                                                              ",
   "                                                                                                              ",
   "     @                                                                                                        ",
   "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;