/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

更新至row281

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    //设置
        'Save': '保存',
        'Export': '导出',
        'Import': '导入',
        'Hard Reset': '硬复位',
        'Export/Import': '导出/导入',
        'Notation': '计数法',
        //计数法
            'Scientific': '科学计数法',
            
            'Binary': '二进制',
        //字体
            'Courier New': '等宽字体',
    //统计
        'You completed': '你完成了',
        'You have played for': '你玩了',
        'You spent': '你度过了',
        'Your matter filled': '你的物质填满了',
        'Your maximum Gravitons is': '你的最大引力子数量是',
    //debuff
        'Your resource potential is infinite': '您的资源上限是无限的',
    //其他
        'Hotkeys': '快捷键',
        'Toggle all': '切换全部',
        'Default': '默认',
        'Enabled': '启用',
        'challenges': '挑战',
        'Challenges': '挑战',
        'dimensions': '维度',
        'Dimensions': '维度',
    //左侧栏
        'Settings': '设置',
        'Achievements': '成就',
        'Statistics': '统计',
        'Automation Shop': '自动化商店',
    //右侧栏辅助
        'Current': '当前',
        'Next': '下一个',
        'You need': '你需要',
        'You have': '你有',
    //物质层级
        'Matter': '物质',
    //光子层级
        'Photonic': '光学',
        'energy': '能量',
    //引力子层级
    //中子层级
        'Electrons': '电子',
    //真空层级
        'Vacuumic': '真空重置',
        'Infinity': '无限',
    //维度层级
        'Dimensional': '维度学',
        'DIMENSIONAL SHIFT': '维度提升',
    //原子层级
        'Periodic table': '元素周期表',
        'free levels': '免费等级',
        'Helium': '氦',//2
        'Lithium': '锂',//3
        'Synthesis': '合成',//碰撞2
    //生物层级
        'Biological': '生物',
        'Evolutions': '进化',
        'EXTINCTION': '灭绝',
        'Population': '人口',
        'Population changes': '人口变化',
        'Your species has a total population of': '你的人口总数',
        'Fertility': '生育能力',//infobox
        'Metabolism': '新陈代谢',//u12
        'Photosynthesis': '光合作用',//u21
    //未分类：


    'Information': '信息',
    'Infrared Waves': '红外波',
    'Infrared': '红外线',
    'Logarithm': '对数',
    'Mitochondria': '线粒体',
    'Mortality': '死亡率',
    'You can have': '你可以拥有',
    'Yellow': '黄色',
    'Vacuumic dimensions': '真空维度',
    'You gain': '你获得',
    'You started playing': '你已开始玩',
    'You performed': '你进行了',
    'You need to get': '你需要获得',
    'Electron Power': '电子能',
    'Carbon': '碳',
    'Challenge': '挑战',
    'Changelog': '更新日志',
    'BREAK INFINITY': '打破无限',
    'Buy Nitrogen': '买氮',
    'Buy Oxygen': '买氧',
    'Collision Knowledge.': '碰撞知识',
    'Decay Neutrons into an Electron': '将中子衰变成电子',
    'Decay Neutrons into a W-Boson': '将中子衰变成W玻色子',
    'Decay Neutrons into a Proton': '将中子衰变成质子',
    'Neutronic': '中子',
    'Neutronic particles': '中子粒子',
    'Neutronic particles are': '中子粒子',
    'Neutronic dimensions': '中子维度',
    'Close': '关闭',
    'Hex': '十六进制',
    'Gravitons.': '引力。',
    'Green': '绿色',
    'Gravitons': '引力子',
    'Gravitonic': '引力学',
    'Gravitonic Challenges are': '引力挑战',
    'Gravitonic upgrades': '引力升级',
    'in this reset': '在本次重置中',
    'Inertia': '惯性',
    'antimatter': '反物质',
    'Cost': '花费',
    'Collect energy': '收集能量',
    'CNO cycle': 'CNO循环(碳氮氧循环)',
    'Total': '总共',
    'translated to': '转化成',
    'There is': '有 ',
    'There can be at most': '最多可以有',
    'Tickspeed': '计时频率',
    'Tickspeed Upgrades': '计时频率升级',
    'Kelvins': '开尔文',
    'Lucida Console': '光泽控制台',
    'Level': '等级',
    'Membranes': '膜片',
    'Matter.': ' 物质。',
    'matter per': '物质每',
    'matter': '物质',
    'Red Waves': '红色波',
    'Red': '红色',
    'Neutrons': '中子',
    'Neutrons.': '中子。',
    'Theme': '主题',
    'Alpha process': '阿尔法过程(氦核作用)',
    'An Automation Shop is now open for everyone who performed a Neutronic reset at least once! It will contain upgrades to automate all layers above Photonic.': '自动化商店现在会为每个至少执行过一次中子重置的人开放!它将包含QoL升级以自动化光子之上的所有层级。',
    'Also, ×': '此外, ×',
    'All production is divided by': '所有产量除以',
    'Time is': '时间速率',
    'Three is a Crowd': '三是一群(Three is a crowd)',
    'This caps at': '它的上限在',
    'They give ×': '他们给予 ×',
    'There are only': '只有',
    'There are Four Lights': '这里有四盏灯',
    'real-life second': '现实秒',
    'Reaction': '反应',
    'Reach specified temperature goals to receive boosts!': '达到指定的温度目标即可获得加成！',
    'Time speed formulas are rebalanced a bit: base time speed nerf is reduced from x1000 to x256, but upgrades reducing it are weaker.': '时间速度公式重新平衡了一点:基本时间速度的削弱从x1000减少到x256，但时间加速升级更弱。',
    'Tickspeed Upgrades are more powerful': '计时频率升级更强大',
    'Tickspeed Upgrades also affect Photonic Dimensions, but at reduced rate': '计时频率升级也会影响光子维度，但效果会降低(QwQ注:每个计时频率都有该加成!叠乘!)',
    'Tickspeed Upgrade effect is additive.': '计时频率升级效果变成了叠加的。',
    'Tickspeed affects Neutronic dimensions with reduced effect.': '计时频率升级会影响中子维度，但是效果更弱。',
    'to all': '对所有',
    'to time speed': '以时间速度',
    'Cost of Tickspeed Upgrades scales slower': '计时频率升级的成本变慢',
    'Cost of Photonic Dimensions scales slower': '光子维度的成本增长速度变慢',
    'Dimensional dimensions': '次元维度',
    'Dimension autobuyers': '维度自动购买器',
    'degrees Fahrenheit': '华氏度',
    'degrees Celsius': '摄氏度',
    'Check Inertia in Mechanics tab.': '在力学选项卡中看看惯性。',
    'Annihilation produces': '湮灭生产',
    'Annihilation produced': '湮灭产生了',
    'Hold Ctrl while pressing a button to re-distribute max.': '按住Ctrl键的同时按一个按钮即可移除/添加最大',
    'Hydrogen': '氢',
    'Hotkeys now don\'t work on exporting/importing screen.': '快捷键现在不能在导出/导入屏幕上起效。',
    'Green Waves': '绿光波',
    'Get a Collision Point': '得到一个碰撞点',
    'Genetic Reshuffle': '基因改组',
    'Genetic Recombination': '基因重组',
    'Genetic Hardening': '基因强化',
    'Genetic Diversity': '遗传多样性',
    'Genes.': '基因。',
    'Evolutions with larger Advantage (shown in top-right corner) are implemented quicker.': '具有更大百分率的进化(显示在右上角)完成得更快。',
    'Fertility rate is increased': '生育率上升',
    'Evolutions are implemented': '进化完成',
    'Eukaryotes': '真核生物',
    'Emit Infrared Waves': '发射红外波',
    'Emit Green Waves': '发射绿光波',
    'Emit X-Ray Waves': '发射X射线',
    'Emit Ultraviolet Waves': '发射紫外线',
    'Emit Red Waves': '发射红光波',
    'Emit Blue Waves': '发射蓝光波',
    'Challenges are now checked for completion before autobuyer actions.': '现在，在自动购买器起效之前，将检查挑战是否完成。',
    'of any resource':' 资源(对所有资源)',
    'dimensions of each kind': ' 级维度',
    'Dimensions are working as if there are x^': '维度数量以 x^',
    'of them':'. 的效率起效      汉化优化:QwQ(qq3174905334)',
    'You need to break Infinity in order to complete Vacuumic challenges.': '你需要打破无限才能完成真空挑战。',
    'You need to get a certain amount of matter to complete Photonic challenges.': '你需要获得一定数量的物质来完成光子挑战。',
    'You need to get a certain amount of matter to complete Neutronic challenges.': '你需要获得一定数量的物质来完成中子挑战。',
    'While Infinity is broken, the resource limit is disabled': '当无限被打破时，资源限制被禁用(QwQ注:就是没上限了)',
    'Black Holes also increase resource limit (up to': '黑洞也能升高资源限制 (最大加成',
    'Unlock Tickspeed Upgrades': '解锁计时频率升级(QwQ注:好东西)',
    'Now you no longer start the game in 1970.': '现在你不再从1970年开始游戏。',
    'Gain a percentage of Inertia income while online': '在线时获得一定百分比的惯性收入',
    'Display': '显示',
    'Display temperature in': '显示温度的单位',
    'don\'t display': '不显示',
    'Shuffled tabs around a bit.': '杂乱无章的标签周围。',
    'Show upgrade IDs': '显示升级id',
    'Show full changelog (might include spoilers': '显示完整的更新日志(可能会剧透',
    'Shift+V - switch to Vacuumic tab': 'Shift+V -切换到真空选项卡',
    'Shift+P - switch to Photonic tab': 'Shift+P -切换到光子选项卡',
    'Shift+N - switch to Neutronic tab': 'Shift+N -切换到中子选项卡',
    'Shift+G - switch to Gravitonic tab': 'Shift+G -切换到重力选项卡',
    'Shift+D - switch to Dimensional tab': 'Shift+D -切换到维度学选项卡',
    'Shift+B - switch to Biological tab': 'Shift+B -切换到生物选项卡',
    'Shift+A - switch to Atomic tab': 'Shift+A -切换到原子选项卡',
    'Shift - hold to see upgrade IDs': '按住Shift键查看升级id',
    'Improve Photon gain formula': '改进光子获得公式',
    'Higher level Dimensions give more Shards': '更高级(如5维)的维度提供更多的碎片',
    'Green Waves are boosted a bit.': '绿波效果被加成了一点。',
    'and': '和',
    'and Photon': '和光子',
    'Annihilation produces more energy based on current matter': '基于当前物质，湮灭产生更多能量',
    'Atom gain on Atomic resets is raised to a power': '原子获得受到一个指数',
    'Anti challenged': '反挑战',
    'atoms': '原子',
    'Atoms': '原子',
    'Atomic': '原子学',
    'energy so far': ' 能量到目前为止',
    'disabled': '禁用',
    'Blue Waves': '蓝光波',
    'Blue': '蓝色',
    'Coil dimensions': '引力维度',
    'Collapse space': '空间塌缩',
    'Collide matter': '碰撞物质',
    'Collider': '对撞机',
    'slower': '更慢',
    'achievements.': '成就.',
    'Aesthetics': '美学',
    'After Extinction: ×': '灭绝后：×',
    'Atoms.': '原子.',
    'Blind': '瞎子计数法(',
    'Big Rip': '大撕裂',
    'next': '下一个',
    'Next at': '下一个需要',
    'Nothing Matters': '没什么大不了的(没什么是物质,Nothing Matters)',
    'Nitrogen': '氮',
    'One of each': '每一个',
    'Explosive Breeding': '爆炸繁殖',
    'Fifth Element': '第五元素',
    'Faster than a potato': '比土豆还快',
    'Five Star Rating': '五星好评',
    'Font': '字体',
    'Solar Flare': '太阳耀斑',
    'Star Citizen': '星际文明',
    'Shards': '维度碎片',
    'Second Thoughts': '重新考虑',
    'Antimatter grows faster': '反物质增长更快',
    'Antimatter does not grow.': '反物质不会增长。',
    'Buy Lithium': '购买锂',
    'Buy Hydrogen': '购买氢',
    'Buy': '购买',
    'Buy Helium': '购买氦',
    'Buy Boron': '购买硼',
    'Buy Space Theorem with Neutrons': '用中子购买空间定理',
    'Buy Space Theorem with Vacuum Energy': '用真空能量购买空间定理',
    'Buy Beryllium': '购买铍',
    'Challenged': '历经挑战',
    'Combinatorial Explosion': '组合爆炸',
    'Gain': '获得',
    'Gain a free level of Synthesis': '获得一个免费的合成等级',
    'G - perform a Gravitonic reset': 'G - 进行引力重置',
    'Future Space Theorem costs': '之后的空间定理成本',
    'B - perform an Biological reset': 'B - 进行生物重置',
    'N - perform a Neutronic reset': 'N - 进行中子重置',
    'P - perform a Photonic reset': 'P - 进行光子重置',
    'reset autobuyer': '重置自动购买器',
    'all Tickspeed upgrades are': '所有的计时频率升级',
    'Zero Blinks': '零闪烁',
    'Background Radiation': '背景辐射',
    'All Neutronic challenges at once.': '所有中子挑战同时进行。',
    'Black Holes every second': '黑洞每一秒',
    'Black Holes also provide free Gravitons upon reset': '重置时黑洞还会提供免费的引力子',
    'always keep Photonic upgrades on resets.': '始终在重置时保持光子升级。',
    'always keep Gravitonic upgrades on resets.': '重置时始终保留引力子升级。',
    'All Photonic Dimensions gain a bonus based on Gravitonic and Neutronic Challenges completed': '所有光子维度都会根据完成的引力子和中子挑战获得加成',
    'Replication': '复制',
    'Quadratic Growth': '二次增长',
    'I\'m So Meta': '我太元了',
    'If you perform a Vacuumic right now, the new temperature would be': '(QwQ:与温度增长无关)如果您现在进行真空重置，则温度将变为',
    'Gravitonic dimensions': '引力维度',
    'Gravitons upon Gravitonic reset': '引力子在引力子重置时',
    'Gravitons upon reset': '引力子在重置时',
    'Hey, it\'s not cold anymore!': '嘿，现在不冷了！',
    'Hey, that\'s illegal!': '嘿，那是非法的！',
    'Hellscape': '地狱景观',
    'High Five': '击掌(high five,直译为高的五个)',
    'Home Alone': '小鬼当家',
    'Display numbers above the resource limit normally': '正常显示超过资源限制的数字',
    '1024 bits is not enough': '1024字节不够',
    '1 year': '1 年',
    '1 Vacuum Energy': '1 真空能量',
    '1 Neutron': '1 中子',
    '1 Graviton': '1 引力子',
    '1 seconds': '1 秒',
    'All Photonic challenges at once.': '同时开启所有的光子挑战。',
    'Annihilation produces more energy.': '湮灭产生更多的能量。',
    '"Matter Mayhem" achievement now preserves your automation from Gravitonic layer upon any reset.': '“物质混乱”的成就现在会在重置时保留你的引力子层级的自动化。',
    '...breathe out': '…呼气',
    'based on space': '基于空间',
    'All types of dimensions count for Shard gain, twice more for each layer above Matter': '所有类型的维度都参与碎片获取的计算公式，在物质之上的每一层级计数多两倍',
    'All Vacuumic challenges at once.': '同时开启所有真空挑战。',
    'Antimatter growth is much slower now if it outpaces Matter significantly.': '如果反物质的增长速度远远超过物质，那么它的增长速度就会慢得多。',
    'Autobuyers for even-numbered dimensions are disabled.': '偶数维度的自动购买器被禁用。(QwQ:2维,4维等)',
    'Atoms and Collision Knowledge are not affected by the resource limit. This is permanent.': '原子和碰撞知识不受资源限制的影响。 这是永久保留的。(QwQ:仅在原子层级保留,高级重置后会被重置)',
    'Double Trouble': '双重麻烦',
    'Next layer unlocks at breaking Infinity': '下一层在打破无限时解锁',
    'Next layer unlocks at': '下一层解锁于',
    'NEW DIMENSIONS???': '新维度???',
    'Saves are now encoded using base64.': '存档现在使用???编码。(QwQ:233333)',
    'Boson Power persists through Photonic': '玻色子的能量在光子重置间保留',
    'Boost the 5th tier and higher Matter Dimensions.': '加成第五和更高的物质维度。(QwQ:没用)',
    'Boost Shard production based on Dimensional': '基于维度学重置次数加成碎片获取',
    'Boost Photon production based on bought 1st': '基于购买的物质一维加成光子生产',
    'Boost all Matter Dimensions based on bought 1st': '基于购买的第一物质维度加成所有物质维度',
    'Boost all Photonic dimensions based on Photonic': '基于光子重置次数增强所有光子维度',
    'Alternate Default': '替换默认',
    'All costs are x^': '所有成本变为 x^',
    'ago (real-time': '前（现实时间',
    'Achievements with an additional effect have a different color.': '具有额外效果的成就具有不同的颜色。',
    'Achievement multiplier is increased based on current Temperature.': '根据当前温度增加成就倍数。(QwQ:底数)',
    ' Each row has a layer on which all upgrades in this row are reset.': '每一行都有一个对应的层级，在该层级以上的层级重置该行中的所有升级。',
    '% more effective.': '% 更有效率。',
    '% lower': '% 更低',
    '% faster': '% 更快',
    '% cheaper': '% 更便宜',
    '. Graviton gain is divided by': '。引力子获取被除以',
    '. Gain': '. 获得',
    '(next at': '下一个在',
    '(based on your best time speed': '(根据你的最佳时间速度(QwQ:是全局游戏速率,减益那个)',
    '(based on time since last reset': '(基于自上次重置以来的时间',
    '(based on current matter': '(基于当前物质',
    'Space Theorem cost scaling is ×': '空间定理成本增长变为 ×',
    'Skipping Layers': '跳过层级',
    'slower growth of the time-based production nerf': '基于时间的产量削弱更慢增长',
    'Settings tab added.': '设置选项卡已添加。',
    'Display matter gain': '显示物质收益',
    'Each dimension is': '每个维度比上一维慢 ',
    'dimensions collapses each second': '维度每秒钟会塌缩',
    'Dimensional Dimensions boost all previous dimensions.': '次元维度会加成所有次元维度以下的维度。',
    'Contemplating the Infinite': '考虑无限',
    'Collision Points cost less.': '碰撞点成本更低。',
    'Collision Points are half as expensive, with the minimum cost of': '碰撞点的成本只有原来的一半，最低的成本为',
    'Collision Knowledge if you perform an Atomic right now': '碰撞知识，如果你现在执行一次原子重置',
    'Distribute 50% of energy': '使用50％的能量',
    'Double the storage capacity of Inertia': '惯性存储容量翻倍',
    'Each bought Gravitonic Dimension gives ×': '每个购买的引力维度都提供×',
    'Bonus to 1st Matter Dimension that decreases over time in this Photonic': '随在此光子重置中的时间减少的给第一物质维度的加成',
    'Proton Power boosts Electron Power gain': '质子能量加成电子能量获取量(QwQ:可以考虑跳过几个点这排)',
    'Proton Power persists through Photonic': '质子能量在光子重置间保留',
    'Proton Power production is not affected by production nerf based on current matter': '质子能量的生产不受基于物质的生产减益的影响',
    'Presets': '预设',
    'Proton Power': '质子能量',
    'Requires the resource limit of at least': '需要资源限制达到',
    'Resource limit is': '资源上限是',
    'Reward': '奖励',
    'Shards.': '碎片.',
    'space so far': '空间',
    'Shard gain is increased based on current Temperature.': '碎片获取量根据当前温度增加。',
    'Shards boost Energy production': '碎片促进能量生产',
    'Space Theorem cost scaling is divided by': '空间定理成本增长被除以',
    'Space Theorem tree autobuyer is': '空间定理树自动购买器是',
    'Effect': '效果',
    'Experiments': '实验',
    'gain': '收益',
    'Gain +': '收益 +',
    'Gain ×': '收益 ×',
    'Goal': '目标',
    'Inertia provides ×': '惯性提供 ×',
    'is not raised to a power': '没有被指数影响',
    'Boson Power': '玻色子能量',
    'Beryllium': '铍',
    'If you had no Gravitons, your current matter could get you': '如果你没有引力子，你现在的物质可以让你',
    'increase Collision Knowledge gain based on Lithium levels.': '基于锂,加成碰撞知识获取。',
    'Increase multiplier per Photonic dimension': '增加购买光子维度的加成',
    'Increase temperature by diverting energy production into heating the Universe.': '通过将产生的能量用来加热宇宙中来提高温度。',
    'Increase the maximum multiplier from Inertia to time speed by': '增加惯性的最大时间速率加成.',
    'Inflation also boosts the first four Neutronic Dimensions': '膨胀会加成前四个中子维度',
    'Inflation also boosts the first three Gravitonic Dimensions': '膨胀会加成前三个引力子维度',
    'Inflation also boosts the first two Photonic Dimensions': '膨胀会加成了前两个光子维度',
    'Inflation, which gives you the following bonuses': '膨胀，它为您提供以下加成',
    'Infrared Wave effect also applies to Photon gain': '红外波效果也加成光子获取',
    'Instead of making the game harder, Dimensional challenges provide a positive effect. If you complete the challenge, this effect becomes permanent.': '次元挑战并没有让游戏变得更难，反而提供了有益的效果。 如果您完成挑战，此效果将变为永久性。(QwQ:没事干就进一个次元挑战吧,正在进行的挑战也有加成)',
    'is dilated with the power of': '被时间膨胀,效率变为 ^',
    'Only the first row of Photonic upgrades is available.': '只有第一排光子升级可用。',
    'Only the leftmost path is available on all splits.': '只有最左边的空间树升级可用。',
    'production': '生产',
    'Photons.': '光子。',
    'Protons': '质子',
    'Stars do nothing.': '星辰无效。',
    'Stars produce more Tickspeed upgrades.': '星辰会给予更多的计时频率升级。',
    'Stars provide': '星辰提供',
    'Stars, which give you the following bonuses': '星星，为您提供以下奖励',
    'Start Photonic resets with': '光子重置后开始带有',
    'Temperature': '温度',
    '3rd Dimensions also count for Shard gain.': '第三维度也计入碎片增益。',
    '3rd Dimensions do not produce anything.': '第三维度不产生任何东西。',
    '3rd M. Dim. multiplier before nerfs is at least the square of 4th M. Dim. multiplier': '削弱前的物质三维倍率至少是物质四维倍率的平方',
    '3rd M. Dim. multiplier before nerfs is at least the square root of 2nd M. Dim. multiplier': '削弱前的物质三维倍率至少是物质二维倍率的平方根',
    'You automatically leave your Dimensional challenges on Atomic or higher resets.': '在进行原子或更高级的重置后你会自动离开次元挑战。',
    'You automatically leave your Gravitonic challenges on Neutronic or higher resets.': '在进行中子或更高级的重置后你会自动离开引力子挑战。',
    'You automatically leave your Neutronic challenges on Vacuumic or higher resets.': '在进行真空或更高级的重置后你会自动离开你的中子挑战。',
    'You automatically leave your Photonic challenges on Gravitonic or higher resets.': '在进行引力子或更高级的重置后你会自动离开你的光子挑战。',
    'You automatically leave your Vacuumic challenges on Dimensional or higher resets.': '在进行次元或更高级的重置后你会自动离开你的真空挑战。',
    'You can have 1e18 times more resources.': '你可以拥有1e18倍的资源。',
    'you can perform an additional Dimensional Shift.': '你可以进行一次额外的维度提升。',
    'You can pick all paths from any splits, but each new path from the same split is twice as expensive': '您可以从任何分叉口中选择所有路径，但是同一分叉口中的每条新路径的价格是原来的两倍(QwQ:基础价格*2然后还需要受到价格^2的减益)',
    'Vacuum Energy and': '真空能量和',
    'X-Ray Waves': 'X射线波',
    'X-Ray': 'X射线',
    'W-Bosons': 'W-玻色子',
    'Upgrades': '升级',
    'You also gain': '你也会获得',
    'You will gain': '你会获得',
    'Unlock Vacuumic dimensions': '解锁真空维度',
    'Unlock preset slots for Space Theorem tree autobuyers': '解锁空间定理树自动购买器的预设',
    'unlock Dimensional Dimensions.': '解锁次元维度。',
    'Unlock Temperature in the Vacuumic tab': '在真空选项卡中解锁温度',
    'Capacity Studies': '储存研究',
    'Carbon burning': '碳燃烧',
    'Disable': '禁用',
    'Controlled Reaction': '反应受控',
    'Dimensional Upgrade that reduces Space Theorem cost scaling is better': '降低空间定理成本增长的次元升级效果更好',
    'Current Experiments': '当前实验',
    'Failing that, it places the point in Generation.': '如果做不到这一点，它就会把碰撞点加在产生上。',
    'fertility rate is': '生育率是',
    'Exit Experiments': '退出实验',
    'Fluorine': '氟',
    'free levels of Generation.': '免费的产生等级',
    'Gain Photons on Gravitonic and upon buying this upgrade (based on unlocked layers)': '在引力子重置时和购买该升级时获得光子(基于已解锁的层级)',
    'keep': '保留',
    'Inertia time multiplier is currently': '惯性时间速率增益目前为',
    'Increase the production of Inertia': '增加惯性的产生速度',
    'Increase tickspeed for Matter Dimensions by': '将物质维度的计时频率速度乘以',
    'Inflation also boosts all Vacuumic Dimensions': '膨胀也会加成所有真空维度',
    'Load': '加载',
    'Dimensional upgrades are not reset on Atomic.': '在原子重置时不会重置次元升级。',
    'Experiments are nerfs with different difficulty levels. You can pick any combination of Experiments.': '实验是具有不同难度级别的减益。 您可以选择任意的实验组合。',
    'Entering Experiments requires performing an Atomic reset.': '进入实验需要进行一次原子重置。',
    'Energy affects Temperature more.': '能量对温度的影响更大。',
    'Electron Power production is not affected by production nerf based on current matter': '电子能量的生产不受基于当前物质的生产减益的影响',
    'free levels of all elements up to Carbon.': '免费等级对于碳以下的所有元素。',
    'free Tickspeed Upgrades': '免费计时频率升级',
    'free Tickspeed upgrades per Dimensional Shift.': '免费计时频率升级每次次元移位',
    'Gain more Gravitons upon reset.': '重置时获得更多引力子。',
    'Gain more Waves on Temperature resets.': '在温度重置时获得更多的波。',
    'Generation': '产生',
    'Gravitonic upgrades are': '引力子升级变得',
    'Gravitons cost only one Graviton': '引力子的引力子升级成本变为1引力子',
    'increase Shard gain based on Carbon levels.': '根据碳等级增加碎片获取量。',
    'Li': '锂',
    'less Dimensional shifts.': '更少的维度提升。',
    'Light decreases the amount of matter needed to get a Graviton': '光减少获得引力子所需的物质量',
    'Light decreases time speed (less powerful with more time speed upgrades).': '光会增加时间速度（时间速度升级越多，效果就越弱）。',
    'Light effect on Matter Dimensions is square-rooted.': '光对物质维度的效果变为其平方根。',
    ' Electron Power gain': '电子能量获取',
    ', if it is above': '，如果它大于',
    ', you need to spend': '，你需要花费',
    '(bought): gain': '（买）：获得',
    '% higher.': '% 更高.',
    '% more effective': '％ 更加有效',
    '% more powerful.': '％ 更加强大。',
    '% of Neutrons upon reset per second': '%的在重置时将获得的中子在每秒都会得到',
    '% of Photons upon reset per second': '%的在重置时将获得的光子在每秒都会得到',
    '× cheaper.': '× 更便宜.',
    '× faster': '× 更快',
    '× more': '× 更多',
    '× more effective': '× 更有效',
    '× more energy': '× 更多能量',
    '× more Genes on Biological': '× 更多基因获取量',
    '× more if matter is over': '×更多，如果物质大于',
    'more Shards on Dimensional': '更多碎片获取量',
    'provides ×': '提供 ×',
    'Quantum Entanglement': '量子纠缠',
    'Selected Experiments': '已选实验',
    'Shards are not affected by resource limit.': '碎片不会受到资源上限的影响。',
    'Silicon': '硅',
    'Si': '硅',
    'Sodium': '钠',
    'Start Experiments': '开始实验',
    'Temperature Resets': '温度重置',
    'Temperature resets on Dimensional resets.': '次元重置时温度会被重置。',
    'This row is never reset': '此行永远不会重置',
    'Time is faster': '时间更快',
    'Ultraviolet': '紫外线',
    'Ultraviolet Waves': '紫外线波',
    'Triple-alpha process': '三阿尔法过程(QwQ:不懂自己搜,我也不懂)',
    'You can buy Space Theorems with Neutrons': '你可以用中子购买空间定理',
    'Auto-assigner distributes one point per tick.': '自动分配器每帧分配一个点数。',
    'Auto-assigner is currently': '自动分配器当前状态为',
    'Auto-assigner places the point in Reaction if there are any picked inactive reactions.': '如果有任何选择的但未启用的反应，自动分配器将点数放在反应中。',
    'Trachea': '气管',
    'Vacuum Energy on Vacuumic reset': '真空重置时的真空能量',
    'Vacuumic challenge effects apply only to layers below Dimensional.': '真空挑战效果仅作用于于次元以下的层级。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Unlock autobuyer for ": "解锁自动",
    "Unlock Extinctions (on Population tab": "解锁灭绝 (在人口选项卡",
    "Highest unlocked element is": "最高解锁的元素为",
    "Space Theorems": "空间定理",
    "Current: ": "当前: ",
    "Effect: ": "效果: ",
    "Version ": "版本 ",
    "Unlock Neutronic ": "解锁中子",
    "Unlock Photonic ": "解锁光子",
    "Total effect": "总效果",
    "Buy Space Theorem with 3rd": "购买空间定理通过第三",
    "Buy max": "购买最大",
    "Next: ": "下一个: ",
    "Formula Break": "公式突破",
    "Hydrogen (": "氢 (",
    "Carbon (": "碳 (",
    "All Neutronic Dimensions gain a bonus based on the amount of Vacuumic": "所有中子维度都会获得奖励根据真空数量",
    "Always keep Neutronic upgrades and particles on": "始终保留中子升级和粒子在",
    "Bonus to all Matter Dimensions based on number of Photonic": "基于光子数量给予所有物质维度的加成",
    "Proton Power boosts": "质子能量加成",
    "Stars also boost 1st": "星星也加成了第一",
    "All Gravitonic Dimensions gain a bonus based on the amount of Neutronic": "所有引力维度都会获得加成,根据中子的数量",
    "All Matter Dimensions gain a bonus based on the amount of Photonic": "所有物质维度都会获得加成,根据光子的数量",
    "All Photonic Dimensions gain a bonus based on the amount of Gravitonic": "所有光子维度都会获得加成,根据引力子数量",
    "Boost Neutron gain based on Dimensional": "加成中子获取量,基于维度化次数",
    "Boson Power production is increased based on Neutronic": "加成玻色子能量生产,基于中子",
    "bought 4th": "购买第四",
    "Keep Stars on Neutronic": "中子重置时保留星星",
    "Keep Neutronic upgrades on Vacuumic": "当真空重置时保留中子升级",
    "You can buy Space Theorems with 3rd": "你可以购买空间定理用第三",
    'CK gain': 'CK(碰撞知识)获得',
    "Keep Gravitonic upgrades on Neutronic": "当中子重置时保留重力升级",
    "Keep Neutronic particles and their upgrades on Vacuumic": "当真空重置时保留中子层级的粒子及其升级",
    "Light also affects 2nd": "光也影响第二",
    "Electron Power production is increased based on Gravitonic": "增加电子能量的产生,基于引力子重置次数",
    "Each bought Photonic Dimension boosts corresponding": "每个购买的光子维度都会加成相应的",
    "Light increases time speed (less powerful with more time speed upgrades": "光增加时间速度（时间速度升级越多，效果越弱",
    "unlock X-Ray Waves.": "解锁 X 射线波。",
    'boost Shard gain based on amout of Alpha process and Triple-alpha process reactions working.': '根据 阿尔法过程 和 三阿尔法过程 激活的反应的数量提高碎片增益。',
    "unlock the fifth row of Photonic upgrades.": "解锁第五行光子升级。",
    "unlock autobuyers for Temperature resets. This is permanent.": "解锁自动重置温度。 这是永久性的。",
    "unlock autobuyers for Space Theorems and Space Theorem tree. This is permanent.": "解锁空间定理和空间定理树的自动购买器。 这是永久性的。",
    "unlock additional Temperature milestones.": "解锁额外的温度里程碑。",
    "Tickspeed is increased based on total amount of Tickspeed Upgrades.": "计时频率根据计时频率升级总量增加。",
    "Temperature is raised to a power of": "温度被乘方",
    "reduce Neutronic particle cost scaling based on Lithium levels.": "基于锂,减缓中子层级的粒子成本增长。",
    "Matter-Antimatter protection upgrade is": "物质-反物质保护升级变得",
    "Matter Dimension cost base is reduced by": "物质维度成本基数减少了",
    "keep Space Theorems from Vacuum Energy on Dimensional resets (does not work in Vacuumic challenges).": "在次元重置时保留真空能量购买的空间定理（在真空挑战中不起作用）。",
    "increase multiplier per Dimensional Dimension based on Carbon levels.": "根据碳增加每次购买次元维度的倍率。",
    "Graviton gain is raised to a power of": "引力子增益被乘方",
    "gain Shards on Atomic and upon getting this milestone (based on unlocked layers).": "在原子重置时和获得该里程碑时获得碎片(基于已解锁的层级)。",
    "gain more Atoms on Atomic based on Hydrogen levels.": "根据氢等级在原子重置时获得更多原子。",
    "% more Gravitons from": "% 更多的引力子来自",
    "× more Neutrons from": "× 更多的中子来自",
    "× more Photons from Photonic": "× 更多的光子来自光学",
    "× slower than the previous one": "x",
    "× slower": "× 更慢",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    " Dimensional Dimension": " 次元维度",
    " Vacuumic Dimension": " 真空维度",
    " Photonic Dimension": " 光子维度",
    " Neutronic Dimension": " 中子维度",
    " Gravitonic Dimension": " 引力维度",
    " Matter Dimension": " 物质维度",
    " Matter Dimensions": " 物质维度",
    " resets": "重置",
    " Antimatter is a lot": "反物质是很多",
    " minutes of Inertia": "分钟的惯性",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^Fixed (.+)$/,
    /^Added (.+)$/,
    /^(\d+)th 真空维度$/,
    /^(\d+)th 中子维度$/,
    /^(\d+)th 引力维度$/,
    /^(\d+)th 次元维度$/,
    /^(\d+)th 光子维度$/,
    /^(\d+)th 物质维度$/,
    /^解锁自动购买器(.+)$/,
    /^[Atomic] (.+)$/,
    /^[Dimensional] (.+)$/,
    /^(\d+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^All production above(.+)is(.+)$/,'所有大于$1的产量变为$2'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^Beat Photonic Challenge (\d+) to unlock!$/, '通过光子挑战 $1 即可解锁！'],
    [/^Unlock (\d+)th dimension$/, '解锁第 $1 维度'],
    [/^(\d+) \- buy maximum amount of (\d+)th Dimensions on screen$/, '$1 \- 购买最大屏幕上的第 $2 维度'],
    [/^to (\d+)nd Dimensions$/, '到第 $1 维度'],
    [/^(\d+) Genes$/, '$1 基因'],
    [/^(\d+) Photon$/, '$1 光子'],
    [/^(\d+) Photons$/, '$1 光子'],
    [/^([\d\.]+) seconds$/, '$1 秒'],
    [/^to (\d+)th Dimension$/, '到第 $1 维度'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);