const LEVEL3_DATA = {
    id: 3,
    title: "非臨床試験の基礎",
    icon: "🔬",
    description: "安全性試験、薬物動態試験、毒性試験、GLPの基礎知識",
    modules: [
        {
            id: 301,
            title: "非臨床試験の基礎知識",
            duration: "15分",
            content: `
<h2>非臨床試験 ― 新薬開発の土台を支える</h2>

<p>非臨床試験は、新薬候補物質がヒトに投与される前に、その安全性と有効性を動物実験やin vitro試験（試験管内試験）で評価するプロセスです。医薬品開発において最も重要なステップの一つであり、ここでの結果が臨床試験（治験）への移行可否を決定します。新日本科学は、この非臨床試験分野で日本をリードする企業です。</p>

<h3>非臨床試験の種類</h3>
<table>
<tr><th>試験の種類</th><th>目的</th><th>主な評価項目</th></tr>
<tr><td>安全性薬理試験</td><td>生命維持に重要な臓器機能への影響を評価</td><td>中枢神経系、心血管系、呼吸器系</td></tr>
<tr><td>単回投与毒性試験</td><td>1回の投与で生じる毒性を評価</td><td>致死量、中毒症状、回復性</td></tr>
<tr><td>反復投与毒性試験</td><td>繰り返し投与による毒性を評価</td><td>臓器障害、血液学的変化、病理所見</td></tr>
<tr><td>生殖発生毒性試験</td><td>生殖機能や胎児への影響を評価</td><td>受胎能、催奇形性、出生児への影響</td></tr>
<tr><td>遺伝毒性試験</td><td>遺伝子への影響（変異原性）を評価</td><td>染色体異常、遺伝子突然変異</td></tr>
<tr><td>がん原性試験</td><td>長期投与による発がん性を評価</td><td>腫瘍発生率、腫瘍の種類</td></tr>
<tr><td>薬物動態試験（ADME）</td><td>体内での薬物の挙動を評価</td><td>吸収・分布・代謝・排泄</td></tr>
</table>

<h3>安全性試験の詳細</h3>
<p><strong>安全性薬理試験</strong>は、新薬候補物質が生命維持に必須の臓器機能に及ぼす影響を評価する試験です。ICH S7A/S7Bガイドラインに基づき、以下の3つの重要臓器系（コアバッテリー）を中心に評価されます。</p>
<ul>
<li><strong>中枢神経系</strong>：行動観察（Irwinテスト）、自発運動量測定、体温変化</li>
<li><strong>心血管系</strong>：hERG試験（QT延長リスク評価）、血圧・心拍数測定、心電図評価</li>
<li><strong>呼吸器系</strong>：呼吸数、一回換気量、分時換気量の測定</li>
</ul>

<h3>薬物動態試験（ADME）</h3>
<p>ADME試験は、薬物が体内でどのように挙動するかを評価する試験で、<strong>A</strong>bsorption（吸収）、<strong>D</strong>istribution（分布）、<strong>M</strong>etabolism（代謝）、<strong>E</strong>xcretion（排泄）の頭文字をとったものです。</p>
<ul>
<li><strong>吸収（Absorption）</strong>：薬物が投与部位から血中に移行する過程。バイオアベイラビリティの評価</li>
<li><strong>分布（Distribution）</strong>：血中に入った薬物が各臓器・組織に分布する過程。組織分布試験、血漿タンパク結合率</li>
<li><strong>代謝（Metabolism）</strong>：肝臓などで薬物が化学的に変換される過程。CYP酵素による代謝、代謝物の同定</li>
<li><strong>排泄（Excretion）</strong>：薬物やその代謝物が体外に排出される過程。尿中・糞中排泄、胆汁排泄</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">GLPとは何か</div>
<p><strong>GLP（Good Laboratory Practice：優良試験所基準）</strong>は、非臨床安全性試験の信頼性を確保するための国際的な品質基準です。試験の計画、実施、モニタリング、記録、報告、保存のすべてにわたる管理基準を定めています。日本では厚生労働省が制定したGLP省令に基づき、PMDA（独立行政法人 医薬品医療機器総合機構）が定期的な査察を行います。GLP適合施設でない場合、試験データは規制当局に承認申請資料として提出できません。</p>
</div>

<h3>毒性試験の重要性</h3>
<p>毒性試験は非臨床試験の中核をなす領域です。新薬候補物質の安全性プロファイルを明らかにし、ヒトへの投与における安全な用量範囲を推定するために不可欠です。特に<strong>反復投与毒性試験</strong>は、臨床試験の期間に応じた投与期間（最長9ヶ月〜1年）で実施され、標的臓器毒性や無毒性量（NOAEL）の特定が重要な目的となります。</p>

<h3>非臨床試験から臨床試験へ</h3>
<p>非臨床試験の結果は、<strong>IND（Investigational New Drug）申請</strong>の根拠資料として規制当局（日本ではPMDA、米国ではFDA）に提出されます。非臨床試験で十分な安全性データが得られた場合にのみ、ヒトでの臨床試験（Phase I）が開始されます。新日本科学は、このクリティカルなプロセスを支える非臨床CROとして、業界の信頼を獲得しています。</p>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "ADMEのMは何を表しますか？", options: ["Measurement（測定）", "Metabolism（代謝）", "Monitoring（モニタリング）", "Mutation（変異）"], answer: 1, explanation: "ADMEのMはMetabolism（代謝）を表します。A=Absorption（吸収）、D=Distribution（分布）、M=Metabolism（代謝）、E=Excretion（排泄）です。" },
                { id: "q301_2", type: "choice", question: "GLPの正式名称として正しいものはどれですか？", options: ["Good Laboratory Practice", "General Laboratory Protocol", "Global Laboratory Procedure", "Good Learning Practice"], answer: 0, explanation: "GLPはGood Laboratory Practice（優良試験所基準）の略称で、非臨床安全性試験の信頼性を確保するための国際的な品質基準です。" },
                { id: "q301_3", type: "choice", question: "安全性薬理試験のコアバッテリーに含まれない臓器系はどれですか？", options: ["中枢神経系", "心血管系", "消化器系", "呼吸器系"], answer: 2, explanation: "安全性薬理試験のコアバッテリーは中枢神経系、心血管系、呼吸器系の3つです。消化器系はコアバッテリーには含まれません。" }
            ]
        }
    ]
};
