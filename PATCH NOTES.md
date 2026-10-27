# Checklist — PATCH NOTES

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
