# Checklist — PATCH NOTES

## v0.10 — 2026-10-31
- **Atalhos de navegação**:
  - **Alt+1…9** abre a 1.ª…9.ª página, pela ordem da barra lateral (abre a pasta, se for preciso).
  - **Alt+↑/↓** passa para a secção anterior/seguinte. No fim de uma página continua para a página anterior/seguinte. Funciona também enquanto se escreve.
  - Mover uma tarefa para cima/baixo passa a ser **Ctrl+Shift+↑/↓** (ou Alt+Shift+↑/↓), como no Notion e no Google Docs.
- **Modos de teclado**:
  - Sem nada selecionado, **↑/↓ fazem scroll** da página.
  - **Esc** entra no modo **linhas**: seleciona a primeira linha visível; ↑/↓ movem a seleção (com scroll automático), Shift+↑/↓ alarga, Enter edita, Ctrl+Shift+↑/↓ move a linha, Esc sai.
  - **Ctrl+←** entra no modo **páginas** (barra lateral): ↑/↓ percorrem pastas, páginas e secções, Enter abre, ←/→ fecham e abrem pastas. **Ctrl+→** ou Esc voltam ao modo linhas.
  - Uma pequena etiqueta no fundo do ecrã mostra o modo ativo e as teclas disponíveis.
- **Pastas na barra lateral** (um nível):
  - Um clique no **+** cria uma página; premir o + (ou botão direito) mostra "Nova página" e "Nova pasta".
  - A pasta abre e fecha com um clique. As páginas entram arrastando-as para cima da pasta (ou pelo menu ⋮ da página → "Mover para pasta…") e saem arrastando-as para fora.
  - Menu ⋮ da pasta: mudar nome, ícone, nova página nesta pasta, mover, apagar (as páginas ficam).
- **Separadores dentro da página**: botão "+ Separador" ou escrever `---` numa linha vazia. Movem-se e apagam-se como as outras linhas.

## v0.9 — 2026-10-30
- **Links colados mostram o título da página**, como no Google Docs/Chrome. Por exemplo, colar `https://girart.eu` dá "Art Workshops in Cascais | Girart.eu", a azul e clicável, dentro do texto da tarefa.
  - Se tiveres texto selecionado ao colar, esse texto passa a ser o link.
  - Clicar no link mostra Abrir, Copiar link, Mudar o texto e Remover link. Ctrl+clique abre-o diretamente.
  - Se a página não tiver título acessível, mostra o endereço curto (ex.: "site.pt/pagina").
- **Imagens coladas** (Ctrl+V) ou arrastadas para a página ficam numa linha própria entre as tarefas, a seguir à linha onde estavas.
  - São reduzidas automaticamente (máx. 1600 px, WebP) e guardadas na conta. Aparecem em todos os dispositivos e para quem tem a página partilhada.
  - Clicar na imagem abre-a em grande.
  - No menu ⋮ escolhe-se o tamanho (Pequena, Média, Largura total); também dá para mover, comentar, copiar o link ou apagar.
  - Move-se com a pega ⠿ e apaga-se como uma linha normal; Ctrl+Z também funciona.
- Supabase: bucket público `tasks-images` (cada conta só carrega e apaga na sua pasta) e Edge Function `tasks-linkinfo` (lê o título das páginas, com bloqueio de endereços internos).

## v0.8 — 2026-10-30
- **Sem sessão iniciada, o browser deixa de mostrar as páginas da conta**:
  - Ao abrir o site, se os dados guardados no browser forem de uma conta, aparece "A verificar a sessão…" até a sessão ser confirmada. Só depois as páginas são mostradas.
  - Se a sessão terminou (por "Terminar sessão", por ter expirado ou por ter sido terminada noutro site frisk.pt), as páginas da conta são apagadas deste browser e aparece uma página vazia. Os dados continuam na conta.
  - Se havia alterações ainda por enviar quando a sessão terminou sozinha, ficam guardadas à parte e só são enviadas quando essa mesma conta voltar a entrar.
  - Sem internet: as páginas só aparecem se a sessão não tiver sido terminada neste browser.

## v0.7b — 2026-10-30
- **Sessão mantém-se iniciada até fazeres "Terminar sessão"**: o site guarda também uma cópia da chave de renovação da sessão no próprio browser. Se o browser apagar os cookies (o Safari/iPhone apaga-os ao fim de 7 dias), o site volta a entrar sozinho. Ao terminar sessão, a cópia é apagada.

## v0.7a — 2026-10-29
- **Correção importante (perda de dados em páginas partilhadas)**: quando a cópia pessoal na conta trazia uma página ou secção partilhada com conteúdo vazio (por exemplo, gravada por um separador com uma versão antiga do site aberta), o site podia mostrar só "Secção 1" e, a seguir, gravar esse conteúdo vazio por cima da página partilhada.
  - O conteúdo das páginas e secções partilhadas passa a vir sempre da tabela partilhada (`tasks_docs`), nunca da cópia pessoal.
  - Nova proteção: o site nunca substitui uma página ou secção partilhada com texto por uma versão completamente vazia. Em vez disso, repõe o conteúdo guardado.
- Foi guardada uma cópia de segurança da página "Discovercasa" (HUB, HUB Later, Features) no Vault do Supabase (`backup_discovercasa_2026_10_29`).

## v0.7 — 2026-10-29
- **Lembretes nas tarefas** (pessoais: cada conta tem os seus, mesmo em páginas partilhadas):
  - Menu ⋮ da tarefa → "⏰ Lembrete…": dia e hora, atalhos (Daqui a 1 hora, Hoje às 18h, Amanhã às 9h, Próxima segunda às 9h) e repetição (todos os dias, todas as semanas, todos os meses).
  - A tarefa mostra a etiqueta "⏰ Amanhã 09:00" (🔁 se repetir; a vermelho se já passou). Clicar na etiqueta permite editar ou remover o lembrete.
  - Concluir uma tarefa com lembrete único apaga o lembrete.
- **Notificações push**, mesmo com o site fechado:
  - Ativam-se em Definições → Conta → "Notificações de lembretes" → "Ativar neste dispositivo". O botão "Enviar teste" confirma que estão a funcionar.
  - A notificação tem os botões **Adiar 1 hora** e **Concluir**. Concluir abre o Tasks e marca a tarefa como feita; clicar na notificação abre a tarefa.
  - No iPhone/iPad funcionam se o Tasks for adicionado ao ecrã principal (Safari → Partilhar → Adicionar ao ecrã principal) e aberto a partir daí.
- O site passa a poder ser instalado como app (manifest + ícones + service worker `sw.js`).
- Supabase: tabelas `tasks_reminders` e `tasks_push_subs` (RLS por conta), função `tasks_push_subscribe`, Edge Function `tasks-push` (envio Web Push com chaves VAPID guardadas no Vault, adiar a partir da notificação, notificação de teste) e tarefa agendada `tasks-lembretes` (pg_cron, todos os minutos).

## v0.6 — 2026-10-27
- **Mudar a ordem das páginas e secções arrastando na barra lateral**. No computador basta clicar e arrastar; no telemóvel, premir um momento e depois arrastar. Uma linha azul mostra onde vai ficar.
  - As páginas reorganizam-se dentro do seu grupo ("as minhas" ou "Partilhadas comigo").
  - As secções reorganizam-se dentro da página. Largar uma secção em cima de outra página move-a para essa página.
  - As opções "Mover para cima/baixo" do menu ⋮ continuam disponíveis.

## v0.5b — 2026-10-27
- O painel de comentários volta a abrir por cima do documento, à direita, sem o mover nem encolher (anula a alteração de layout da v0.5a). Clicar fora continua a fechá-lo.

## v0.5a — 2026-10-27
- Com o painel de comentários aberto, clicar fora dele fecha-o. Clicar no 💬 de outra linha muda diretamente para essa conversa.
- Em ecrãs largos, o documento encolhe quando o painel de comentários está aberto, para o painel não tapar as linhas nem os botões 💬.

## v0.5 — 2026-10-27
- **Nova permissão "Pode comentar"**: a pessoa vê tudo e comenta, mas não altera tarefas. Fica disponível nos convites, na lista de pessoas e no link de partilha (Pode editar / Pode comentar / Pode ver).
- **Comentários por linha** (tarefa ou título):
  - O botão 💬 aparece ao lado da linha: ao passar o rato fica 💬+ para comentar, e quando já há comentários mostra 💬 com o número. Também está no menu ⋮ → "Comentar…".
  - Painel lateral com a conversa: autor, data, Ctrl+Enter para enviar, apagar os teus comentários (o dono pode apagar qualquer um), Resolver/Reabrir. Um comentário novo reabre a conversa.
  - Os comentários atualizam em tempo real. Também funcionam em páginas não partilhadas (ficam privados até partilhares).
- **Link de partilha** (na janela "Partilhar…"):
  - "Criar link" e escolher **Qualquer pessoa com o link (sem conta) · só ver** ou **Só pessoas com conta frisk.pt** (Pode editar / comentar / ver).
  - Botão "Copiar". O link pode ser desativado e reativado, ou substituído por um novo ("Criar novo link"), e nesse caso o antigo deixa de funcionar.
  - Link com conta: quem o abre e entra na conta (ou cria uma) fica logo com acesso e aparece na lista de pessoas com a etiqueta "Via link".
  - Link público: abre uma vista só de leitura (com separadores, se for uma página), sem precisar de conta.
- Supabase: coluna `role` em `tasks_shares`; novas tabelas `tasks_comments`, `tasks_comment_threads` e `tasks_links`; funções `tasks_can_comment`, `tasks_link_info`, `tasks_link_public`, `tasks_link_join`. Tudo com RLS e testado na base de dados real.

## v0.4a — 2026-10-27
- **Correção**: convidar dava "new row violates row-level security policy for table tasks_docs". A regra de leitura do Supabase não reconhecia o dono no momento em que o documento partilhado era criado. Já está corrigido e testado na base de dados real: criar, convidar, aceitar, ler e editar.
- O botão de definições no topo passa a mostrar o **nome da conta** (ou o email, se não houver nome), com o ponto de estado da gravação (verde = guardado). Sem sessão iniciada mostra "Entrar".
- As definições têm um novo separador **Conta** (entrar, criar conta, sincronizar, terminar sessão), que substitui a janela de conta separada.

## v0.4 — 2026-10-27
- **Partilha de páginas e secções** com outras contas da plataforma frisk.pt:
  - Menu ⋮ da página ou da secção → "Partilhar…" → email da conta + "Pode editar" ou "Pode ver". Só funciona com emails que já têm conta (avisa se não existir).
  - Na mesma janela vês quem tem acesso (Pendente / Aceite / Recusou), podes mudar a permissão ou remover o acesso.
  - Quem é convidado vê um aviso "📩 Tens N convites de partilha" e escolhe Aceitar ou Recusar. Depois de aceitar, aparece na barra lateral em **"Partilhadas comigo"**. As secções soltas ficam agrupadas em "Secções partilhadas comigo".
  - **Tempo real**: as alterações aparecem nos dois lados em 1–2 segundos. Se ambos mexerem ao mesmo tempo, as alterações são juntadas tarefa a tarefa.
  - Tudo é comum, incluindo a marca "em curso". Nas partilhas "Pode ver" não é possível editar nada e aparece a faixa "só podes ver".
  - O destinatário pode "Sair da partilha" no menu ⋮. Se o dono apagar a página ou secção, ela desaparece também para quem a tinha.
  - 👥 na barra lateral = partilhada; 👁 = só leitura.
  - Uma secção já partilhada à parte não pode ser incluída na partilha da página inteira (o site avisa).
- Supabase: novas tabelas `tasks_docs` (conteúdo partilhado, com controlo de versão) e `tasks_shares` (convites e permissões), com RLS e funções `tasks_share_invite`, `tasks_my_invites`, `tasks_share_respond`, `tasks_shared_with_me`. O conteúdo partilhado deixa de estar no `user_site_data` do dono, que guarda só uma referência.

## v0.3a — 2026-10-27
- A zona **"Concluídas"** de cada secção começa sempre minimizada (como a caixa "Em curso"). Clicar no título abre/fecha.

## v0.3 — 2026-10-24
- **Títulos movem o conteúdo**: arrastar um título (ou usar Alt+↑/↓, "Mover para cima/baixo" ou "Mover para outra secção") leva consigo tudo o que está por baixo, até ao próximo título do mesmo nível. Um título leva os subtítulos que tem por baixo; um subtítulo pára no título seguinte. As tarefas continuam a levar as subtarefas.
- **Ctrl+clique na caixa** marca ou desmarca a tarefa como "em curso". Premir longo continua a funcionar, por exemplo no telemóvel.
- **Pega ⠿**: um clique copia o texto da linha (ou das linhas selecionadas); premir abre as opções; arrastar move.
- **Desfazer/refazer**: Ctrl+Z e Ctrl+Y (ou Ctrl+Shift+Z) para texto escrito ou apagado, tarefas apagadas, movidas, concluídas, recuos, cores, etc. A escrita contínua conta como um só passo.
- **Seleção de várias linhas**: arrastar o rato de uma linha para outras, Shift+clique, ou Esc para selecionar a linha atual (Shift+↑/↓ para alargar). Com linhas selecionadas:
  - Ctrl+C / Ctrl+X para copiar ou cortar.
  - Delete para apagar.
  - Tab / Shift+Tab para mudar o recuo.
  - Ctrl+Enter para concluir.
  - Ctrl+Shift+Enter para marcar como em curso.
  - As cores escolhidas no menu ⋮ aplicam-se a todas as linhas selecionadas.
- **Caixa "Em curso"** pode ser minimizada ou maximizada clicando no título. Começa sempre minimizada.
- Lista de atalhos nas Definições atualizada.

## v0.2a — 2026-10-24
- Espaçamento entre linhas mais largo, semelhante ao 1.5 do Google Docs.
- Títulos e subtítulos a **negrito**, alinhados mais à esquerda do que as caixas (como no Google Docs), com espaço extra por baixo.

## v0.2 — 2026-10-24 (tasks.frisk.pt)
- **Conta e gravação na nuvem**: login com a conta central da plataforma (via `plataforma-core/auth.js`, sessão partilhada em `.frisk.pt`).
  - Ao entrar, as tarefas ficam gravadas no Supabase (projeto "Sites", tabela `user_site_data`, `site_id = 'tasks'`, `chave = 'data'`). As regras de acesso (RLS) garantem que cada utilizador só vê os seus dados.
  - Site `tasks` registado na tabela `sites` (tasks.frisk.pt).
  - Gravação automática cerca de 1 segundo depois de cada alteração. Mudar de página ou de secção e abrir ou fechar "Concluídas" não conta como alteração.
  - Quando se volta ao separador (e a cada 2 minutos), o site vai buscar as alterações feitas noutros dispositivos.
  - Proteção contra conflitos: se a conta e o dispositivo tiverem alterações diferentes, o site pergunta quais manter, com opção de desfazer.
  - Sem internet, continua a funcionar e guarda neste dispositivo. As alterações são enviadas quando a ligação voltar.
- Botão de estado no topo (Entrar / Guardado / A guardar… / Sem ligação / Por decidir) e botão "Conta" na barra lateral: entrar, criar conta, recuperar password, sincronizar e terminar sessão.
- Ao terminar sessão, as tarefas são removidas deste dispositivo (continuam na conta).
- Quem abre o site pela primeira vez já não recebe a página "Finanças". Essa página entra através dos teus dados importados.

## v0.1d — 2026-10-23
- Botão **"Concluir todas"** na faixa "Em curso": conclui de uma vez todas as tarefas em curso da página. Cada uma vai para as concluídas da sua secção, com data e hora. Inclui "Desfazer".

## v0.1c — 2026-10-23
- **"Por fazer" configurável por secção**: no menu ⋮ da secção, a opção "“Por fazer”: …" permite escolher entre usar o padrão das Definições, desligar, ou um valor próprio em dias ou em nº de tarefas concluídas.
- **Repor**: as tarefas em "Por fazer" têm um botão visível que as devolve à secção de origem e recomeça a contagem. A opção também está no menu ⋮.
- **Ícones (emoji)** em páginas e secções: no menu ⋮, escolhe "Escolher ícone…" (60 emojis ou qualquer outro). O ícone aparece na barra lateral e nos títulos, e clicar nele permite mudá-lo.
- **Cor da caixa**: para além do contorno, pinta também o fundo da checkbox com transparência.
- **Formatação de texto**: negrito, itálico, sublinhado, riscado, realce e limpar formatação, todos com atalhos. Há também atalhos para converter em título, subtítulo ou tarefa.
- **Definições** passam a ter separadores **Geral** e **Atalhos**, com a lista completa de atalhos. O botão "Atalhos" da barra lateral abre o separador Atalhos.
- **Em curso**:
  - Premir na caixa (ou usar Ctrl+Shift+Enter, ou o menu ⋮) marca a tarefa como "em curso": a caixa fica com o visto e o texto com uma caixa à volta.
  - Um clique normal conclui a tarefa. Premir outra vez retira a marca.
  - Faixa **"Em curso"** no topo da página com as tarefas marcadas de todas as secções: clicar no texto leva à tarefa e clicar na caixa conclui-a.
  - As tarefas em curso não passam para "Por fazer".

## v0.1b — 2026-10-23
- O site regista a **data e hora de criação** de cada tarefa (não aparece no ecrã). Só conta a partir do momento em que a tarefa tem texto. Às tarefas que já existiam foi atribuída a data em que esta versão abriu pela primeira vez.
- Nova secção **"Por fazer"**, presente em todas as páginas. Só aparece na barra lateral, a vermelho e com contador, quando tem tarefas.
  - A tarefa sai da secção de origem e fica com a indicação de onde veio. As subtarefas vão com ela.
  - Ao concluí-la, vai para as concluídas da secção de origem.
  - No menu ⋮ há a opção "Devolver a …", que reinicia o tempo.
  - Na barra lateral, o número de cada secção deixa de contar as tarefas que estão em "Por fazer".
- **Cores** no menu ⋮: cor da caixa (checkbox) e cor do texto, com 20 cores à escolha e a opção "Sem cor".
- Novo botão **Definições** (engrenagem no topo e na barra lateral):
  - Tema: Automático, Claro ou Escuro.
  - "Por fazer": ligar ou desligar, e escolher o tempo em **dias** ou em **número de tarefas concluídas na página**. Por defeito: 7 dias.
- Correção: a barra de progresso e os botões de adicionar não ficavam escondidos quando deviam.

## v0.1a — 2026-10-23
- Nova página **"Finanças"** com as secções Melhorias/alterações, Onboarding e Depois da versão 1.0. A primeira secção tem o conteúdo da imagem: Interface/aspeto, Listagens/Finanças/Contas e Para ir para v1, com as respetivas subtarefas. A página é adicionada uma única vez, também a quem já tem dados guardados.
- As tarefas concluídas mostram a **data e hora de conclusão** (dd/mm/aaaa hh:mm) na secção "Concluídas".
- O número ao lado de cada secção corresponde ao total de tarefas menos as concluídas (o comportamento já era este desde a v0.1).

## v0.1 — 2026-10-23
- Ficheiro HTML único, funciona offline; dados guardados no browser (localStorage, chave `frisk-checklist-v1`).
- Várias **páginas**, cada uma com várias **secções** (abas na barra lateral, estilo Google Docs).
- Blocos: **título**, **subtítulo** e **tarefa** (checkbox); atalhos `# ` e `## ` para títulos.
- **Subtarefas** em vários níveis (Tab / Shift+Tab ou menu).
- Tarefas concluídas passam para a zona **"Concluídas"** no fundo da secção (recolhível), com indicação de onde estavam; ao desmarcar voltam ao sítio original.
- Concluir uma tarefa conclui as subtarefas; desmarcá-la reverte as que foram concluídas em conjunto.
- **Arrastar** pela pega ⠿ para reordenar, criar subtarefa (largar mais à direita) ou mover para outra secção/página (largar na barra lateral).
- Menu por item: converter tipo, subir/descer, recuo, mover para outra secção, duplicar, apagar.
- Páginas e secções: mudar nome, duplicar, reordenar, mover secção para outra página, apagar.
- "Desfazer" após apagar/mover; barra de progresso por secção; contador de pendentes na barra lateral.
- Colar várias linhas cria várias tarefas (reconhece `- [ ]`, `[x]`, `☐`).
- Exportar/Importar JSON; modo escuro automático; versão mobile com menu lateral.
- Estrutura de dados preparada para sincronizar com Supabase (`user_site_data`, `site_id = 'checklist'`).
