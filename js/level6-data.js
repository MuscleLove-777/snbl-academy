const LEVEL6_DATA = {
    id: 6,
    title: "CRO業界における位置づけ",
    icon: "🏆",
    description: "非臨床CRO市場の構造と国内外の競合状況",
    modules: [
        {
            id: 601,
            title: "CRO業界における新日本科学の位置づけ",
            duration: "15分",
            content: `
<h2>非臨床CRO市場と競争環境</h2>

<p>CRO（Contract Research Organization：受託研究機関）業界は、製薬企業のR&Dアウトソーシングの拡大に伴い、持続的な成長を続けています。新日本科学は、日本の非臨床CRO市場において<strong>トップクラスのポジション</strong>を占めるとともに、グローバル市場でも一定のプレゼンスを確立しています。</p>

<h3>CRO業界の全体像</h3>
<p>CRO業界は大きく<strong>臨床CRO</strong>と<strong>非臨床CRO</strong>に分類されます。臨床CROはヒトでの治験を支援し、非臨床CROは動物実験等による前臨床試験を受託します。</p>

<table>
<tr><th>分類</th><th>主な業務</th><th>代表的企業</th></tr>
<tr><td>臨床CRO</td><td>治験モニタリング、データマネジメント、統計解析</td><td>IQVIA、Covance（Labcorp Drug Development）、PPD</td></tr>
<tr><td>非臨床CRO</td><td>安全性試験、毒性試験、薬物動態試験</td><td>Charles River、Covance、新日本科学</td></tr>
</table>

<h3>グローバル非臨床CRO市場</h3>
<p>グローバルの非臨床CRO市場は、年間数十億ドル規模の巨大市場です。市場の成長を牽引しているのは、製薬企業の研究開発パイプラインの拡大、バイオ医薬品の台頭、規制の厳格化による試験需要の増加です。</p>
<ul>
<li><strong>Charles River Laboratories</strong>（米国）：世界最大の非臨床CRO。安全性評価、創薬支援、研究用モデルの提供</li>
<li><strong>Covance / Labcorp Drug Development</strong>（米国）：臨床・非臨床の両方をカバーする総合CRO</li>
<li><strong>Inotiv（旧Bioanalytical Systems）</strong>（米国）：非臨床試験に特化した中堅CRO</li>
<li><strong>WuXi AppTec</strong>（中国）：急速に拡大する中国発の総合CRO</li>
<li><strong>Eurofins Scientific</strong>（欧州）：分析試験を中心に非臨床試験も展開</li>
</ul>

<h3>日本の非臨床CRO市場</h3>
<p>日本の非臨床CRO市場における主要プレーヤーは以下の通りです。</p>
<table>
<tr><th>企業名</th><th>特徴</th></tr>
<tr><td>新日本科学（SNBL）</td><td>霊長類試験に圧倒的強み。自社繁殖体制、グローバル展開</td></tr>
<tr><td>薬物安全性試験センター（BOZO）</td><td>げっ歯類・イヌ中心の安全性試験</td></tr>
<tr><td>CMIC（シーミック）</td><td>臨床CROが主力だが非臨床も展開</td></tr>
<tr><td>イナリサーチ</td><td>安全性試験、病理学的評価に強み</td></tr>
<tr><td>新薬リサーチセンター</td><td>安全性薬理試験、一般毒性試験</td></tr>
</table>

<div class="info-box tip">
<div class="info-box-title">製薬企業のアウトソーシング拡大</div>
<p>製薬企業は自社の研究開発コストを最適化するため、非臨床試験のアウトソーシング比率を年々高めています。かつては自社研究所で非臨床試験を実施する企業が多かったですが、GLP施設の維持コスト、専門人材の確保、動物飼育管理の負担などを考慮し、専門のCROに外部委託する方が効率的と判断するケースが増加しています。この流れは非臨床CRO市場の成長を後押ししています。</p>
</div>

<h3>新日本科学の競争優位性</h3>
<p>新日本科学は、日本の非臨床CRO市場において以下の競争優位性を持っています。</p>
<ul>
<li><strong>霊長類供給の独自性</strong>：自社繁殖によるカニクイザルの安定供給は、国内外の競合が容易に模倣できない参入障壁</li>
<li><strong>長年の実績と規制当局との信頼関係</strong>：60年以上にわたる試験受託実績と、PMDAとの良好な関係</li>
<li><strong>グローバル対応力</strong>：SNBL USAを通じたFDA対応力、国際規制への対応</li>
<li><strong>TR事業による差別化</strong>：経鼻投与技術という独自の研究開発パイプライン</li>
<li><strong>一貫したサービス提供</strong>：非臨床から臨床まで、ワンストップでの開発支援</li>
</ul>

<h3>市場の課題とリスク</h3>
<p>非臨床CRO市場には以下のような課題やリスクも存在します。動物福祉に対する社会的関心の高まり、霊長類供給の国際的な規制強化、中国発CROの価格競争力、規制要件の変化などが業界の不確実性要因となっています。</p>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "世界最大の非臨床CROとされる企業はどれですか？", options: ["新日本科学", "Charles River Laboratories", "WuXi AppTec", "IQVIA"], answer: 1, explanation: "Charles River Laboratoriesは米国に本社を置く世界最大の非臨床CROで、安全性評価、創薬支援、研究用モデルの提供を行っています。" },
                { id: "q601_2", type: "choice", question: "新日本科学の非臨床CRO市場における最大の競争優位性は何ですか？", options: ["最も低い価格設定", "カニクイザルの自社繁殖による安定供給", "最大の従業員数", "最も多い海外拠点数"], answer: 1, explanation: "新日本科学の最大の競争優位性は、カニクイザルの自社繁殖・供給体制です。これは競合が容易に模倣できない強固な参入障壁です。" },
                { id: "q601_3", type: "choice", question: "製薬企業が非臨床試験のアウトソーシングを増やしている理由として正しくないものはどれですか？", options: ["GLP施設の維持コスト削減のため", "専門人材の確保が困難なため", "臨床試験が不要になるため", "動物飼育管理の負担軽減のため"], answer: 2, explanation: "非臨床試験をアウトソーシングしても臨床試験は依然として必要です。アウトソーシングの理由はコスト最適化、人材確保、管理負担軽減などです。" }
            ]
        }
    ]
};
