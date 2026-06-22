const dimensions = [
  "专业能力",
  "业务理解",
  "学习敏捷度",
  "协作影响力",
  "管理潜力",
  "执行稳定性",
  "发展意愿",
  "流失风险",
];

const roleWeights = {
  管理岗: {
    专业能力: 0.9,
    业务理解: 1.2,
    学习敏捷度: 1,
    协作影响力: 1.25,
    管理潜力: 1.35,
    执行稳定性: 0.95,
    发展意愿: 1.05,
    流失风险: 1,
  },
  技术岗: {
    专业能力: 1.35,
    业务理解: 1,
    学习敏捷度: 1.2,
    协作影响力: 0.95,
    管理潜力: 0.85,
    执行稳定性: 1,
    发展意愿: 1,
    流失风险: 1,
  },
  行政岗: {
    专业能力: 1,
    业务理解: 1.05,
    学习敏捷度: 0.95,
    协作影响力: 1.25,
    管理潜力: 0.9,
    执行稳定性: 1.35,
    发展意愿: 1,
    流失风险: 1,
  },
};

const technicalDirectionTags = {
  平台后端: ["平台后端", "系统架构", "接口服务", "稳定性治理"],
  "前端/客户端": ["前端工程", "交互体验", "组件化", "跨端适配"],
  "NLP 算法": ["NLP", "文本理解", "模型迭代", "语义应用"],
  "CV 算法": ["CV", "视觉算法", "模型训练", "图像理解"],
  推荐算法: ["推荐算法", "模型排序", "数据实验", "效果优化"],
  数据工程: ["数据工程", "指标口径", "数据质量", "链路治理"],
  "DevOps/SRE": ["SRE", "自动化运维", "可观测性", "稳定性保障"],
  安全: ["安全治理", "风险识别", "漏洞治理", "攻防意识"],
  测试开发: ["测试开发", "质量工程", "自动化测试", "发布保障"],
};

const questionBank = {
  管理岗: [
    ["业务理解", "能把部门目标拆解成清晰的团队行动计划"],
    ["管理潜力", "能够识别并培养团队中的关键人才"],
    ["协作影响力", "推动跨部门资源协同并解决冲突"],
    ["学习敏捷度", "面对新业务能快速试错并复盘沉淀"],
    ["执行稳定性", "对重点项目有稳定的节奏管理和结果追踪"],
    ["发展意愿", "愿意承担更复杂的组织和经营责任"],
  ],
  技术岗: [
    ["专业能力", "能独立解决复杂技术问题并形成方案"],
    ["学习敏捷度", "能快速掌握新技术并用于实际项目"],
    ["业务理解", "理解技术方案对业务指标和用户体验的影响"],
    ["协作影响力", "能通过文档、评审和辅导影响团队质量"],
    ["执行稳定性", "关键交付中质量、进度和风险控制稳定"],
    ["发展意愿", "愿意承担技术攻坚或技术负责人角色"],
  ],
  行政岗: [
    ["执行稳定性", "能长期稳定地维护流程、资产和服务响应"],
    ["协作影响力", "能协调多方需求并保障员工服务体验"],
    ["业务理解", "理解行政支持对组织效率和成本的影响"],
    ["专业能力", "熟悉制度、供应商、预算或办公空间管理"],
    ["学习敏捷度", "能持续优化流程并引入更高效工具"],
    ["发展意愿", "愿意承担更大范围的组织支持职责"],
  ],
};

const questionnaireTemplates = {
  管理岗: `业务理解:4
管理潜力:3
协作影响力:4
学习敏捷度:3
执行稳定性:3
发展意愿:3`,
  技术岗: `专业能力:4
学习敏捷度:4
业务理解:3
协作影响力:3
执行稳定性:4
发展意愿:3`,
  行政岗: `执行稳定性:4
协作影响力:4
业务理解:3
专业能力:4
学习敏捷度:3
发展意愿:3`,
};

const resumeBoostWords = {
  专业能力: ["专家", "架构", "制度", "预算", "证书", "技术", "供应商"],
  业务理解: ["经营", "指标", "业务", "客户", "复盘", "增长"],
  学习敏捷度: ["新", "转型", "优化", "试点", "复盘", "沉淀"],
  协作影响力: ["跨部门", "协同", "推动", "沟通", "辅导"],
  管理潜力: ["团队", "管理", "培养", "主管", "负责人"],
  执行稳定性: ["流程", "交付", "稳定", "响应", "项目"],
  发展意愿: ["晋升", "承担", "挑战", "负责", "牵头"],
};

const roleSpecificTagWords = {
  技术岗: {
    系统架构: ["架构", "系统", "链路", "模块"],
    后端工程: ["后端", "交易", "接口", "服务"],
    NLP: ["NLP", "语义", "文本", "大模型"],
    CV: ["CV", "视觉", "图像", "识别"],
    推荐算法: ["推荐", "排序", "召回"],
    算法模型: ["算法", "模型", "推荐", "数据"],
    数据工程: ["数据", "指标", "数仓", "链路"],
    SRE: ["SRE", "DevOps", "可观测", "运维"],
    技术文档: ["文档", "沉淀", "复盘"],
    故障治理: ["故障", "稳定性", "排查"],
  },
  管理岗: {
    目标拆解: ["目标", "拆解", "经营", "指标"],
    团队带教: ["团队", "培养", "带教", "梯队"],
    跨部门协同: ["跨部门", "协同", "推动"],
    绩效管理: ["绩效", "复盘", "结果"],
  },
  行政岗: {
    流程治理: ["流程", "制度", "标准化"],
    供应商管理: ["供应商", "采购", "预算"],
    服务响应: ["服务", "响应", "员工体验"],
    资产空间: ["资产", "办公空间", "空间"],
  },
};

let employees = [
  {
    id: 1,
    name: "林嘉予",
    role: "管理岗",
    title: "区域运营经理",
    years: 9,
    team: 18,
    performance: 5,
    resumeSource: "PDF+摘要",
    questionnaireSource: "员工自评问卷",
    resume: "负责区域经营目标拆解、团队培养和跨部门项目推进，连续两年绩效优秀。业务方评价其经营敏感度强，但授权和梯队复制仍需加强。",
    answers: { 业务理解: 4, 管理潜力: 4, 协作影响力: 4, 学习敏捷度: 3, 执行稳定性: 4, 发展意愿: 4 },
  },
  {
    id: 2,
    name: "周启明",
    role: "技术岗",
    techDirection: "平台后端",
    title: "资深后端工程师",
    years: 8,
    team: 0,
    performance: 4,
    resumeSource: "PDF+摘要",
    questionnaireSource: "员工自评问卷",
    resume: "主导核心交易链路架构优化，沉淀技术文档，参与多次复杂故障复盘。业务方认可系统稳定性，但认为跨团队解释复杂方案的能力仍需提升。",
    answers: { 专业能力: 4, 学习敏捷度: 4, 业务理解: 3, 协作影响力: 3, 执行稳定性: 4, 发展意愿: 3 },
  },
  {
    id: 3,
    name: "许安然",
    role: "行政岗",
    title: "行政服务主管",
    years: 6,
    team: 4,
    performance: 4,
    resumeSource: "摘要",
    questionnaireSource: "员工自评问卷",
    resume: "负责办公空间、供应商和资产流程管理，推动服务响应机制优化。业务部门反馈响应稳定，流程优化主动性较好，预算前置规划仍需增强。",
    answers: { 执行稳定性: 4, 协作影响力: 4, 业务理解: 3, 专业能力: 4, 学习敏捷度: 3, 发展意愿: 3 },
  },
  {
    id: 4,
    name: "孟知远",
    role: "技术岗",
    techDirection: "推荐算法",
    title: "算法工程师",
    years: 4,
    team: 0,
    performance: 3,
    resumeSource: "PDF+摘要",
    questionnaireSource: "员工自评问卷",
    resume: "参与推荐模型迭代，技术能力成长快，但跨团队影响力和业务复盘经验不足。业务方反馈其主动承担意愿强，但边界感和优先级判断需要辅导。",
    answers: { 专业能力: 4, 学习敏捷度: 4, 业务理解: 2, 协作影响力: 2, 执行稳定性: 3, 发展意愿: 5 },
  },
  {
    id: 5,
    name: "唐雨桐",
    role: "管理岗",
    title: "客服团队主管",
    years: 7,
    team: 5,
    performance: 3,
    resumeSource: "摘要",
    questionnaireSource: "员工自评问卷",
    resume: "团队日常管理稳定，流程执行扎实，近期发展意愿下降，需要关注成长空间。业务方评价其服务稳定，但对变化项目的主动推动不足。",
    answers: { 业务理解: 3, 管理潜力: 2, 协作影响力: 4, 学习敏捷度: 3, 执行稳定性: 4, 发展意愿: 1 },
  },
];

let selectedEmployeeId = employees[0].id;
let compareIds = [];
let surveySubmissions = loadSurveySubmissions();

const els = {
  employeeCount: document.querySelector("#employee-count"),
  overviewGrid: document.querySelector("#overview-grid"),
  list: document.querySelector("#employee-list"),
  compareContent: document.querySelector("#compare-content"),
  radar: document.querySelector("#radar"),
  filterRole: document.querySelector("#filter-role"),
  filterPotential: document.querySelector("#filter-potential"),
  filterSuccession: document.querySelector("#filter-succession"),
  filterRisk: document.querySelector("#filter-risk"),
  inputRole: document.querySelector("#input-role"),
  resumeFileNote: document.querySelector("#resume-file-note"),
  resumeSource: document.querySelector("#input-resume-source"),
  resumeFileBlock: document.querySelector("#resume-file-block"),
  resumeSummaryBlock: document.querySelector("#resume-summary-block"),
  selfSurveyStatus: document.querySelector("#self-survey-status"),
  techDirectionField: document.querySelector("#tech-direction-field"),
  techDirection: document.querySelector("#input-tech-direction"),
};

function clamp(value, min = 1, max = 5) {
  return Math.max(min, Math.min(max, value));
}

function scoreEmployee(employee) {
  const scores = Object.fromEntries(dimensions.map((dimension) => [dimension, 3]));
  Object.entries(employee.answers).forEach(([dimension, value]) => {
    scores[dimension] = Number(value);
  });

  const resume = employee.resume || "";
  Object.entries(resumeBoostWords).forEach(([dimension, words]) => {
    const hits = words.filter((word) => resume.includes(word)).length;
    scores[dimension] += Math.min(0.6, hits * 0.16);
  });

  scores["专业能力"] += Math.min(0.5, employee.years * 0.035);
  scores["管理潜力"] += employee.team > 0 ? Math.min(0.65, employee.team * 0.04) : -0.15;
  scores["执行稳定性"] += (Number(employee.performance) - 3) * 0.28;
  scores["发展意愿"] += employee.answers["发展意愿"] >= 4 ? 0.2 : -0.2;

  const weightedScores = {};
  dimensions.forEach((dimension) => {
    const weight = roleWeights[employee.role][dimension] || 1;
    const adjusted = scores[dimension] + (weight - 1) * 0.55;
    weightedScores[dimension] = Math.round((clamp(adjusted, 1, 5) - 1) * 22 + 12);
  });

  weightedScores["流失风险"] = calculateRisk(employee, weightedScores);
  const positiveDimensions = dimensions.filter((dimension) => dimension !== "流失风险");
  const average = Math.round(
    positiveDimensions.reduce((sum, dimension) => sum + weightedScores[dimension], 0) /
      positiveDimensions.length,
  );
  const potential = average >= 82 ? "A" : average >= 66 ? "B" : "C";
  const succession = calculateSuccession(employee.role, weightedScores, average);
  const riskState = weightedScores["流失风险"] >= 68 ? "关注" : "正常";
  const tags = createTags(employee, weightedScores, potential, succession);
  const roleTags = createRoleSpecificTags(employee);

  return {
    scores: weightedScores,
    average,
    potential,
    succession,
    riskState,
    tags,
    roleTags,
    conclusion: createConclusion(employee.role, potential, succession),
    actions: createActions(employee.role, weightedScores),
    warning: createWarning(weightedScores),
  };
}

function calculateRisk(employee, scores) {
  let risk = 30;
  if ((employee.answers["发展意愿"] || 3) >= 5 && scores["管理潜力"] < 68) risk += 20;
  if ((employee.answers["发展意愿"] || 3) <= 2) risk += 26;
  if ((employee.resume || "").includes("意愿下降")) risk += 12;
  if ((employee.resume || "").includes("主动推动不足")) risk += 8;
  if ((employee.resume || "").includes("优先级判断需要辅导")) risk += 8;
  if (employee.performance <= 3 && scores["学习敏捷度"] < 70) risk += 12;
  if (employee.years >= 6 && scores["发展意愿"] >= 80) risk += 8;
  if (scores["执行稳定性"] >= 82) risk -= 8;
  return Math.round(clamp(risk, 18, 92));
}

function calculateSuccession(role, scores, average) {
  const roleCore = {
    管理岗: ["管理潜力", "协作影响力", "业务理解"],
    技术岗: ["专业能力", "学习敏捷度", "业务理解"],
    行政岗: ["执行稳定性", "协作影响力", "专业能力"],
  }[role];
  const coreAverage = roleCore.reduce((sum, dimension) => sum + scores[dimension], 0) / roleCore.length;
  const finalScore = coreAverage * 0.7 + average * 0.3 - Math.max(0, scores["流失风险"] - 62) * 0.32;
  if (finalScore >= 78) return "高";
  if (finalScore >= 62) return "中";
  return "低";
}

function createTags(employee, scores, potential, succession) {
  const tags = [];
  const role = employee.role;
  if (potential === "A" && succession !== "低") tags.push("高潜继任储备");
  if (role === "技术岗" && employee.techDirection) tags.push(`${employee.techDirection}型`);
  if (role === "技术岗" && scores["专业能力"] >= 84) tags.push("技术专家型");
  if (role === "行政岗" && scores["执行稳定性"] >= 84) tags.push("流程协调型");
  if (role === "管理岗" && scores["管理潜力"] >= 84) tags.push("团队带教型");
  if (scores["协作影响力"] >= 82) tags.push("跨部门推动者");
  if (scores["流失风险"] >= 68) tags.push("需关注留任");
  if (tags.length === 0) tags.push("稳定执行型");
  return tags;
}

function createRoleSpecificTags(employee) {
  const directionTags = employee.role === "技术岗" ? technicalDirectionTags[employee.techDirection] || [] : [];
  const text = `${employee.resume || ""} ${employee.title || ""} ${employee.techDirection || ""}`;
  const matches = Object.entries(roleSpecificTagWords[employee.role] || {})
    .filter(([, words]) => words.some((word) => text.includes(word)))
    .map(([tag]) => tag);
  const defaults = {
    技术岗: ["工程实践", "技术沉淀"],
    管理岗: ["团队运营", "目标推进"],
    行政岗: ["行政服务", "流程执行"],
  };
  return [...directionTags, ...matches, ...(defaults[employee.role] || [])]
    .filter((tag, index, list) => list.indexOf(tag) === index)
    .slice(0, 6);
}

function createConclusion(role, potential, succession) {
  if (potential === "A" && succession === "高") return "目标岗位胜任准备度较高，建议纳入关键岗位后备梯队。";
  if (potential === "A") return "具备高潜特征，建议配置更复杂任务验证目标岗位胜任度。";
  if (succession === "中") return "当前胜任基础较稳，适合通过轮岗、项目牵头或专项培养提升岗位继任适配。";
  return `${role}画像显示仍需补齐关键能力，建议先作为岗位骨干持续培养。`;
}

function createActions(role, scores) {
  const low = dimensions
    .filter((dimension) => dimension !== "流失风险")
    .sort((a, b) => scores[a] - scores[b])
    .slice(0, 2);
  const actionMap = {
    专业能力: "安排专业认证、导师辅导或复杂问题攻关，提升专业深度。",
    业务理解: "参与经营复盘或客户现场，增强对业务指标的理解。",
    学习敏捷度: "配置新业务试点任务，要求形成复盘和方法沉淀。",
    协作影响力: "牵头跨部门专项，训练资源协调和冲突解决能力。",
    管理潜力: "增加带教和目标拆解责任，验证人员辅导能力。",
    执行稳定性: "建立里程碑、风险清单和复盘机制，提升交付稳定性。",
    发展意愿: "开展职业发展面谈，明确成长路径和阶段目标。",
  };
  const actions = low.map((dimension) => actionMap[dimension]);
  if (role === "管理岗") actions.push("建议安排一次跨团队项目负责人经历，观察组织影响力。");
  if (role === "技术岗") actions.push("建议输出技术方案或知识库内容，扩大技术影响半径。");
  if (role === "行政岗") actions.push("建议牵头流程优化项目，验证服务体验和成本意识。");
  return actions.slice(0, 3);
}

function createWarning(scores) {
  if (scores["流失风险"] >= 78) return "发展意愿与当前成长空间不匹配，建议尽快进行保留面谈。";
  if (scores["流失风险"] >= 68) return "存在一定流失风险，建议关注晋升路径、挑战任务和激励匹配。";
  return "当前风险处于正常范围，建议保持周期性沟通和发展跟进。";
}

function parseQuestionnaireText(text) {
  const normalized = text.replaceAll("：", ":");
  const parsed = {};
  dimensions.forEach((dimension) => {
    const pattern = new RegExp(`${dimension}\\s*[:=]\\s*([1-5])`);
    const match = normalized.match(pattern);
    if (match) parsed[dimension] = Number(match[1]);
  });
  return parsed;
}

function defaultAnswersForRole(role) {
  return parseQuestionnaireText(questionnaireTemplates[role] || questionnaireTemplates["管理岗"]);
}

function loadSurveySubmissions() {
  try {
    return JSON.parse(localStorage.getItem("talentProfileSurveySubmissions") || "[]");
  } catch {
    return [];
  }
}

function latestSurvey(type, name, role) {
  return surveySubmissions.find((item) => item.type === type && item.name === name && item.role === role);
}

function answersFromSurveys(name, role) {
  const defaults = defaultAnswersForRole(role);
  const self = latestSurvey("self", name, role);
  const merged = {};
  dimensions.forEach((dimension) => {
    merged[dimension] = Number.isFinite(self?.answers?.[dimension]) ? self.answers[dimension] : defaults[dimension];
  });
  return merged;
}

function formatSurveyStatus(type, submission) {
  if (!submission) return "尚未收到当前员工的自评提交。";
  const time = new Date(submission.submittedAt);
  const timeText = Number.isNaN(time.getTime()) ? "刚刚" : time.toLocaleString("zh-CN", { hour12: false });
  return `已收到：${submission.name}（${submission.role}）· ${timeText}`;
}

function refreshSurveyStatus() {
  surveySubmissions = loadSurveySubmissions();
  const name = document.querySelector("#input-name").value.trim() || "未命名员工";
  const role = document.querySelector("#input-role").value;
  els.selfSurveyStatus.textContent = formatSurveyStatus("self", latestSurvey("self", name, role));
}

function handleTextCapableFile(file, targetTextarea, noteElement, successPrefix) {
  if (!file) return;
  if (file.type === "text/plain" || file.name.endsWith(".txt")) {
    const reader = new FileReader();
    reader.onload = () => {
      targetTextarea.value = String(reader.result || "").trim();
      noteElement.textContent = `${successPrefix}已读取 txt 内容。PDF 在生产版建议通过后端/OCR 先提取文本。`;
    };
    reader.readAsText(file);
    return;
  }
  noteElement.textContent = `已选择 ${file.name}。当前离线 demo 不解析 PDF 内容，生产版会提取文本后进入同一套结构化解析。`;
}

function updateSourceNotes() {
  const resumeNotes = {
    "PDF+摘要": "推荐：PDF 作为原始材料，摘要作为人工补充/修正；两者合并进入画像。",
    PDF: "只上传 PDF：生产版会从 PDF 提取经历、技能、项目和证书；当前 demo 只显示上传入口。",
    摘要: "只填写摘要：适合没有标准简历时快速补录；当前 demo 会直接用摘要关键词参与评分。",
  };
  els.resumeFileNote.textContent = resumeNotes[els.resumeSource.value];
  els.resumeFileBlock.classList.toggle("is-hidden", els.resumeSource.value === "摘要");
  els.resumeSummaryBlock.classList.toggle("is-hidden", els.resumeSource.value === "PDF");
}

function employeeFromForm() {
  const role = document.querySelector("#input-role").value;
  const name = document.querySelector("#input-name").value.trim() || "未命名员工";
  const answers = answersFromSurveys(name, role);
  return {
    id: Date.now(),
    name,
    role,
    techDirection: role === "技术岗" ? els.techDirection.value : "",
    title: document.querySelector("#input-title").value.trim() || "待补充岗位",
    years: Number(document.querySelector("#input-years").value || 0),
    team: Number(document.querySelector("#input-team").value || 0),
    performance: Number(document.querySelector("#input-performance").value || 3),
    resumeSource: document.querySelector("#input-resume-source").value,
    questionnaireSource: latestSurvey("self", name, role) ? "员工自评问卷（已回收）" : "员工自评问卷（demo 默认结果）",
    resume: document.querySelector("#input-resume").value.trim(),
    answers,
  };
}

function renderOverview(enriched) {
  const total = enriched.length;
  const highPotential = enriched.filter((employee) => employee.result.potential === "A").length;
  const highSuccession = enriched.filter((employee) => employee.result.succession === "高").length;
  const riskCount = enriched.filter((employee) => employee.result.riskState === "关注").length;
  const technical = enriched.filter((employee) => employee.role === "技术岗").length;
  els.overviewGrid.innerHTML = [
    ["总人数", total, "已纳入画像库的现有员工"],
    ["可继任人员", highSuccession, "岗位匹配度高"],
    ["高潜观察", highPotential, "综合潜力等级 A"],
    ["风险关注", riskCount, "需要优先跟进"],
  ]
    .map(
      ([label, value, note]) => `
        <div class="overview-item">
          <strong>${value}</strong>
          <span>${label} · ${note}</span>
        </div>
      `,
    )
    .join("");
}

function renderLibrary() {
  const enriched = employees.map((employee) => ({ ...employee, result: scoreEmployee(employee) }));
  renderOverview(enriched);
  const filtered = enriched.filter((employee) => {
    return (
      (els.filterRole.value === "全部" || employee.role === els.filterRole.value) &&
      (els.filterPotential.value === "全部" || employee.result.potential === els.filterPotential.value) &&
      (els.filterSuccession.value === "全部" || employee.result.succession === els.filterSuccession.value) &&
      (els.filterRisk.value === "全部" || employee.result.riskState === els.filterRisk.value)
    );
  });

  els.employeeCount.textContent = `${employees.length} 人`;
  els.list.innerHTML =
    filtered
      .map((employee) => {
        const topScores = {
          管理岗: ["业务理解", "协作影响力", "管理潜力"],
          技术岗: ["专业能力", "执行稳定性", "管理潜力"],
          行政岗: ["专业能力", "执行稳定性", "协作影响力"],
        }[employee.role];
        const summary = createCardSummary(employee, employee.result);
        return `
          <article class="employee-card ${employee.id === selectedEmployeeId ? "is-active" : ""}" data-id="${employee.id}">
            <div class="employee-card__top">
              <div class="employee-identity">
                <div class="employee-avatar">${employee.name.slice(0, 1)}</div>
                <div>
                  <h3>${employee.name}</h3>
                  <p class="muted">${formatRoleLine(employee)} · ${employee.title} · ${employee.years} 年</p>
                </div>
              </div>
              <label class="compare-check">
                <input type="checkbox" data-action="compare" data-id="${employee.id}" ${compareIds.includes(employee.id) ? "checked" : ""} />
                对比
              </label>
            </div>
            <p class="employee-summary">${summary}</p>
            <div class="mini-meta">
              ${employee.result.tags.slice(0, 4).map((tag) => `<span class="pill">${tag}</span>`).join("")}
              <span class="pill pill--${employee.result.potential.toLowerCase()}">潜力 ${employee.result.potential}</span>
              <span class="pill ${employee.result.riskState === "关注" ? "pill--risk" : ""}">风险${employee.result.riskState}</span>
            </div>
            <div class="bar-list">
              ${topScores
                .map(
                  (dimension) => `
                    <div class="bar-row">
                      <span>${dimension}</span>
                      <span class="bar-track"><span class="bar-fill" style="width:${employee.result.scores[dimension]}%"></span></span>
                      <b>${employee.result.scores[dimension]}</b>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <button class="card-main ghost-button" type="button" data-action="select" data-id="${employee.id}">
              查看完整画像
            </button>
          </article>
        `;
      })
      .join("") || `<p class="muted">没有符合筛选条件的员工。</p>`;

  els.list.querySelectorAll("[data-action='select']").forEach((button) => {
    button.addEventListener("click", () => selectEmployee(Number(button.dataset.id)));
  });
  els.list.querySelectorAll("[data-action='compare']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => toggleCompare(Number(checkbox.dataset.id), checkbox.checked));
  });
  renderCompare();
}

function selectEmployee(id) {
  selectedEmployeeId = id;
  renderLibrary();
  renderProfile();
  document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
}

function formatRoleLine(employee) {
  return employee.role;
}

function createCardSummary(employee, result) {
  const strongest = dimensions
    .filter((dimension) => dimension !== "流失风险")
    .sort((a, b) => result.scores[b] - result.scores[a])
    .slice(0, 2)
    .join("和");
  const roleAdvice = {
    管理岗: "当前岗位可继续扩大目标拆解和团队带教责任。",
    技术岗: `当前岗位可继续承担${employee.techDirection || "技术"}方向的复杂模块、技术沉淀或导师任务。`,
    行政岗: "当前岗位可继续负责跨部门行政项目和标准化体系建设。",
  }[employee.role];
  if (result.riskState === "关注") {
    return `${strongest}有基础，但当前风险需优先跟进，暂缓直接进入关键岗位继任池。`;
  }
  return `${strongest}相对突出，岗位继任适配${result.succession}，${roleAdvice}`;
}

function toggleCompare(id, checked) {
  if (checked) {
    compareIds = [...compareIds.filter((item) => item !== id), id].slice(-2);
  } else {
    compareIds = compareIds.filter((item) => item !== id);
  }
  renderLibrary();
}

function renderCompare() {
  if (compareIds.length < 2) {
    els.compareContent.innerHTML = `<p class="muted">在员工卡片中勾选 2 人，可对比八维画像。</p>`;
    return;
  }
  const selected = compareIds.map((id) => employees.find((employee) => employee.id === id)).filter(Boolean);
  const scored = selected.map((employee) => ({ employee, result: scoreEmployee(employee) }));
  els.compareContent.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>维度</th>
          <th>${scored[0].employee.name}</th>
          <th>${scored[1].employee.name}</th>
        </tr>
      </thead>
      <tbody>
        ${dimensions
          .map(
            (dimension) => `
              <tr>
                <td>${dimension}</td>
                <td>${scored[0].result.scores[dimension]}</td>
                <td>${scored[1].result.scores[dimension]}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderProfile() {
  const employee = employees.find((item) => item.id === selectedEmployeeId) || employees[0];
  const result = scoreEmployee(employee);
  document.querySelector("#profile-avatar").textContent = employee.name.slice(0, 1);
  document.querySelector("#profile-name").textContent = employee.name;
  document.querySelector("#profile-role").textContent = `${employee.title} · ${formatRoleLine(employee)} · ${employee.years} 年经验`;
  document.querySelector("#profile-potential").textContent = result.potential;
  document.querySelector("#profile-succession").textContent = result.succession;
  document.querySelector("#profile-risk").textContent = result.riskState;
  document.querySelector("#profile-tags").innerHTML = result.tags.map((tag) => `<span class="pill">${tag}</span>`).join("");
  document.querySelector("#profile-role-tags").innerHTML = result.roleTags
    .map((tag) => `<span class="pill">${tag}</span>`)
    .join("");
  document.querySelector("#profile-source-line").textContent =
    `信息来源：简历/业务方材料 ${employee.resumeSource || "PDF+摘要"}；问卷 ${employee.questionnaireSource || "员工自评问卷"}${employee.role === "技术岗" && employee.techDirection ? `；技术方向 ${employee.techDirection}` : ""}。`;
  document.querySelector("#profile-conclusion").textContent = result.conclusion;
  document.querySelector("#profile-actions").innerHTML = result.actions.map((action) => `<li>${action}</li>`).join("");
  document.querySelector("#profile-warning").textContent = result.warning;
  drawRadar(result.scores);
}

function drawRadar(scores) {
  const canvas = els.radar;
  const ctx = canvas.getContext("2d");
  const center = canvas.width / 2;
  const radius = 145;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 1;
  ctx.font = "14px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let ring = 1; ring <= 5; ring += 1) {
    ctx.beginPath();
    dimensions.forEach((_, index) => {
      const point = radarPoint(index, (radius * ring) / 5, center);
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
    ctx.strokeStyle = ring === 5 ? "#aab7c3" : "#dce4ea";
    ctx.stroke();
  }

  dimensions.forEach((dimension, index) => {
    const axis = radarPoint(index, radius, center);
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(axis.x, axis.y);
    ctx.strokeStyle = "#dce4ea";
    ctx.stroke();

    const label = radarPoint(index, radius + 32, center);
    ctx.fillStyle = dimension === "流失风险" ? "#b84c4c" : "#465564";
    ctx.fillText(dimension, label.x, label.y);
  });

  ctx.beginPath();
  dimensions.forEach((dimension, index) => {
    const valueRadius = (radius * scores[dimension]) / 100;
    const point = radarPoint(index, valueRadius, center);
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(22, 131, 123, 0.22)";
  ctx.fill();
  ctx.strokeStyle = "#16837b";
  ctx.lineWidth = 3;
  ctx.stroke();

  dimensions.forEach((dimension, index) => {
    const point = radarPoint(index, (radius * scores[dimension]) / 100, center);
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = dimension === "流失风险" ? "#b84c4c" : "#16837b";
    ctx.fill();
  });
}

function radarPoint(index, radius, center) {
  const angle = -Math.PI / 2 + (Math.PI * 2 * index) / dimensions.length;
  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius,
  };
}

function addGeneratedEmployee() {
  surveySubmissions = loadSurveySubmissions();
  const employee = employeeFromForm();
  employees = [employee, ...employees.filter((item) => item.name !== employee.name)];
  selectedEmployeeId = employee.id;
  compareIds = [];
  renderLibrary();
  renderProfile();
  document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateTechnicalDirectionField() {
  const isTechnical = els.inputRole.value === "技术岗";
  els.techDirectionField.classList.toggle("is-hidden", !isTechnical);
  if (isTechnical && !document.querySelector("#input-title").value.trim()) {
    document.querySelector("#input-title").value = "技术工程师";
  }
}

function bindEvents() {
  [els.filterRole, els.filterPotential, els.filterSuccession, els.filterRisk].forEach((select) => {
    select.addEventListener("change", renderLibrary);
  });
  ["#input-name", "#input-role"].forEach((selector) => {
    document.querySelector(selector).addEventListener("input", refreshSurveyStatus);
    document.querySelector(selector).addEventListener("change", refreshSurveyStatus);
  });
  els.inputRole.addEventListener("change", updateTechnicalDirectionField);
  document.querySelector("#generate-profile").addEventListener("click", addGeneratedEmployee);
  document.querySelector("#input-resume-file").addEventListener("change", (event) => {
    handleTextCapableFile(event.target.files[0], document.querySelector("#input-resume"), els.resumeFileNote, "简历文件");
  });
  els.resumeSource.addEventListener("change", updateSourceNotes);
  document.querySelector("#clear-compare").addEventListener("click", () => {
    compareIds = [];
    renderLibrary();
  });
  document.querySelector("#reset-demo").addEventListener("click", () => {
    window.location.reload();
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  });
  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin || event.data?.source !== "talent-profile-survey") return;
    surveySubmissions = loadSurveySubmissions();
    refreshSurveyStatus();
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== "talentProfileSurveySubmissions") return;
    surveySubmissions = loadSurveySubmissions();
    refreshSurveyStatus();
  });
  window.addEventListener("focus", refreshSurveyStatus);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshSurveyStatus();
  });
  window.setInterval(refreshSurveyStatus, 2000);
}

bindEvents();
updateTechnicalDirectionField();
updateSourceNotes();
refreshSurveyStatus();
renderLibrary();
renderProfile();
